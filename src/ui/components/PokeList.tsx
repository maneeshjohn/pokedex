import { PokeListItem } from "../../repo/types"
import { ListWrapper } from "../styled/home";
import { PokeCard } from ".";

type Props = {
  list: PokeListItem[];
}

function PokeList (props: Props): React.ReactElement {

  return (
    <ListWrapper flex={1}>
      {props.list.map((item, idx) => (
        <PokeCard
          key={item.name}
          item={item}
          id={idx + 1}
        />
      ))}
    </ListWrapper>
  );
}

export default PokeList;
