import client from "../lib/network";

const BASE_URL = "https://pokeapi.co/api/v2";

const http = client.create({ base: BASE_URL });

export default http;
