const basePath = "/";
const paramIndicator = ":";

const extractRouteFromPath = (
  path: string,
  routes: Record<string, () => React.ReactElement>,
): string => {
  if (!path.includes(basePath)) return basePath;
  const [_, ...rest] = path.split(basePath);
  const finalPath = ['', ...rest].join(basePath);
  return formatPathWithParams(finalPath, routes);
}

const isRouteParamsPresent = (path: string) => {
  return path.includes(paramIndicator);
}

const formatPathWithParams = (
  path: string,
  routes: Record<string, () => React.ReactElement>,
) => {
  const splitPath = path.split(basePath);
  for (let route in routes) {
    if (isRouteParamsPresent(route)) {
      const splitRoute = route.split(basePath);
      const lastIdx = splitRoute.length -1
      if (
        (splitPath.length === splitRoute.length)
        && splitRoute[lastIdx]
        && splitPath[lastIdx]
      ) {
        return splitRoute.join(basePath);
      }
    }
  }
  return splitPath.join(basePath);
}

export {
  extractRouteFromPath,
};
