import { createContext, useState, useEffect, useMemo } from "react";

import { RouterContextModel } from "../types/router";
import { POP } from "../../utils/constants";

const defaultState: RouterContextModel = {
  path: '',
  push: (_: string) => {},
  pop: () => {},
}

const RouterContext = createContext<RouterContextModel>(defaultState);

type Props = {
  children: JSX.Element;
}

function RouterProvider ({ children }: Props): React.ReactElement {

  const [route, setRoute] = useState<string>(window.location.pathname);
  const path = useMemo(() => route, [route, setRoute]);
  
  const update = () => setRoute(window.location.pathname);

  const push = (route: string) => {
    window.history.pushState(null, "", route);
    setRoute(route);
  }

  const pop = () => {
    window.history.back();
    update();
  }


  useEffect(() => {
    window.addEventListener(POP, update);
    return () => window.removeEventListener(POP, update);
  }, []);

  return (
    <RouterContext.Provider value={{ path, pop, push }}>
      {children}
    </RouterContext.Provider>
  );
}

export {
  RouterContext,
  RouterProvider,
};
