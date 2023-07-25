import { styled } from "styled-components";

import { Color } from "../../lib/types/theme";

type Props = {
  flex?: number;
  bg?: Color;
  pad?: number;
  dir?: "row" | "column" | "row-reverse" | "column-reverse";
}

const Box = styled.div<Props>`
  display: flex;
  flex-direction: ${({ dir }) => dir || "row"};
  flex: ${({ flex }) => flex || 0};
  background-color: ${({ theme, bg }) => theme.colors[bg || "primary"]};
  padding: ${({ pad }) => pad ? `${pad}rem`: 0};
`;

export {
  Box,
};
