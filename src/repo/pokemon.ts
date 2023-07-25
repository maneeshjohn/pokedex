import { create } from "../lib/store";
import { PokeStore } from "./types";

const { useStore, dispatch } = create<PokeStore>({
  list: [],
});

export {
  useStore as usePokeStore,
  dispatch as setPokeStore,
}
