import { ThemeProvider } from "styled-components";

import { useRouter } from "../hooks";
import { THEME } from "../lib/theme";
import { Home, Details } from "../ui/screens";

const routes = {
  '/': () => <Home />,
  '/:id': () => <Details />,
}

function Router (): React.ReactElement {

  const screen = useRouter(routes);

  return (
    <ThemeProvider theme={THEME}>
      {screen}
    </ThemeProvider>
  );
}

export default Router;
