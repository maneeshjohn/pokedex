type GET = "GET";

type POST = "POST";

export type Methods = GET | POST;

export interface Config {
  base: string;
  headers?: Record<string, any>;
}
