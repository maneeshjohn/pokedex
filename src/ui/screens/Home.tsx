import { Box } from "../styled/box";
import { getPokemonList } from "../../services/pokemon";
import { usePokeStoreQuery } from "../../hooks/useQuery";
import { SIZES } from "../../lib/theme";
import { PokeList } from "../components";

function Home (): React.ReactElement {

  const query = usePokeStoreQuery({ key: 'list', queryFn: getPokemonList });

  return (
    <Box flex={1} pad={SIZES.M} dir="column">
      <h1>Pokedex</h1>
      <Box pad={SIZES.L} />
      <PokeList list={query.data} />
    </Box>
  );
}

export default Home;
