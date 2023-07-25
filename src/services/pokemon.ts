// import http from "../utils/http";
import { pokeList } from "../utils/data";

const listResp: Promise<{ name: string, url: string }[]> = new Promise((resolve) => {
  setTimeout(() => resolve(pokeList), 3000);
});

const getPokemonList = async () => {
  const resp = await listResp;
  return resp;
}

export {
  getPokemonList,
}
