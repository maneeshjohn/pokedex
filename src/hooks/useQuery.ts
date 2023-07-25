import { Options, Query } from "../lib/types/query";
import { PokeStore, PokeListItem } from "../repo/types";
import { createQuery } from "../lib/query/query";
import { usePokeStore, setPokeStore } from "../repo/pokemon";

export const usePokeStoreQuery = (args: Options<PokeStore, PokeListItem[]>) => {
  
  const result = usePokeStore(s => s[args.key]);

  let query: Query<PokeStore, PokeListItem[]> = {
    key: args.key,
    data: result,
    isLoading: true,
    error: null,
  };

  const callback = (q: Query<PokeStore, PokeListItem[]>) => {
    query = q;
    if (q.data) setPokeStore({ [args.key]: q.data });
  };

  createQuery(args, callback);

  return {
    ...query,
    data: result,
  };
}
