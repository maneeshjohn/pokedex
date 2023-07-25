import { Store } from "./store";
import { createUseStore } from "./storeFactory";

export function create <S>(s: S) {
  const store = new Store<S>(s);
  const useStore = createUseStore<S>(store);
  return {
    useStore,
    dispatch: store.setState,
  };
}
