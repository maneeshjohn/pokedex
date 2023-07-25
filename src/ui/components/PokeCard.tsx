import { PokeListItem } from "../../repo/types";
import { useNav } from "../../hooks";
import { HomeCard, Name, Id, Image } from "../styled/home";

type Props = {
  item: PokeListItem;
  id: number;
}

function PokeCard (props: Props): React.ReactElement {

  const { push } = useNav();

  const navigate = () => {
    push(`/${props.id}`);
  }

  return (
    <HomeCard onClick={navigate}>
      <Image src="https://comicvine.gamespot.com/a/uploads/scale_small/11/114183/5198629-001bulbasaur.png" />
      <Name>{props.item.name}</Name>
      <Id>#{props.id}</Id>
    </HomeCard>
  );
}

export default PokeCard;
