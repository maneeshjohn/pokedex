import { useSyncExternalStore, useCallback, useRef } from "react";
import { Store } from "./store";

export function createUseStore <S>(store: Store<S>) {
  const useStore = <R>(selector: (s: S) => R): R => {
    let currentState = useRef(selector(store.getState()));

    const subscribe = useCallback((cb: () => void) => {
        return store.subscribe((state) => {
          const nextState = selector(state);
          if (currentState.current !== nextState) {
            currentState.current = nextState;
            cb();
          }
        });
      }, []);
  
    const getSnapshot = () => selector(store.getState());
  
    return useSyncExternalStore(subscribe, getSnapshot);
  }

  return useStore;
}
