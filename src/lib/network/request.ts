import { Left, Right, left, right } from "../core/Either";
import { Config } from "../types/network";

const headers = {
  "Content-Type": "application/json"
}

export class NetworkClient {
  private _base: string = "";
  private _headers: Record<string, any> = headers;

  private static slash = '/';

  private getUrl (url: string) {
    if (this._base) {
      return url.startsWith(NetworkClient.slash)
        ? `${this._base}${url}`
        : `${this._base}/${url}`;
    }
    return url;
  }

  private setBaseUrl (url: string) {
    const lastIndex = url.length - 1;
    if (url[lastIndex] === NetworkClient.slash) {
      this._base = url.slice(0, lastIndex);
    }
    else this._base = url;
  }

  private setHeaders = (config: Config) => {
    if (config.headers) this._headers = config.headers;
  }

  get (url: string) {
    return this.makeRequest(this.getUrl(url));
  }

  fetch (options: RequestInfo) {
    if (typeof options === 'string') return this.get(options);
    return this.makeRequest({
      ...headers,
      ...options,
      url: this.getUrl(options.url),
    });
  }

  create (config: Config) {
    const client = new NetworkClient();
    client.setBaseUrl(config.base);
    client.setHeaders(config);
    return client;
  }

  private async makeRequest (
    options: RequestInfo,
  ): Promise<Left<any> | Right<any>> {
    try {
      const data = await request(options, {
        headers: this._headers,
      });
      return right(data)
    } catch (error: any) {
      return left({ error });
    }
  }
}

async function request (options: RequestInfo, init?: RequestInit) {
  try {
    const resp = await fetch(options, init);
    const json = await resp.json();
    if (resp.status > 205) {
      throw(json);
    }
    return {
      data: json,
      status: resp.status,
    };
  } catch(e) {
    return e;
  }
}
