import { useNav } from "../../hooks";

type Props = {
  to: string;
  children: React.ReactNode;
};

function Link ({ to, children }: Props): React.ReactElement {

  const { push } = useNav();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    push(to);
  }

  return (
    <a
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

export default Link;
