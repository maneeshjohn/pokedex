import { useContext } from "react";

import { RouterContext } from ".";
import { extractRouteFromPath } from "../../utils/router";

function useRouter (
  routes: Record<string, () => React.ReactElement>,
): React.ReactElement {
  const { path } = useContext(RouterContext);
  const currentRoute = extractRouteFromPath(path, routes);
  return routes[currentRoute]?.() || null;
}

function useNav () {
  const { push, pop } = useContext(RouterContext);
  return { push, pop };
}

export {
  useRouter,
  useNav,
};
