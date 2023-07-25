import { Config } from "../types/network";
import { NetworkClient } from "./request";

const nc = new NetworkClient();

const client = {
  create: (config: Config) => new NetworkClient().create(config),
  get: nc.get,
  fetch: nc.fetch,
};

export default client;
