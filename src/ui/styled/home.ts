import styled from "styled-components";
import { Box } from "./box";
import { SIZES } from "../../lib/theme";
import { textCenter } from "./common";

type LWProps = {
  breakpoint?: number;
}

export const ListWrapper = styled(Box)<LWProps>`
  display: grid;
  grid-gap: ${SIZES.M}rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

  @media (min-width: ${({ breakpoint }) => breakpoint || 750}px) {
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  }
`;

export const HomeCard = styled.div`
  padding-bottom: ${SIZES.L}rem;
  background-color: ${({ theme }) => theme.colors.matte};
  border-radius: ${SIZES.XS}rem;
  cursor: pointer;
`;

export const Name = styled.h3`
  ${textCenter}
  margin-bottom: ${SIZES.XS}rem;
  color: ${({ theme }) => `${theme.colors.white}ee`}
`;

export const Id = styled.h5`
  ${textCenter}
  color: ${({ theme }) => `${theme.colors.white}88`}
`;

export const Image = styled.img`
  border-top-left-radius: ${SIZES.XS}rem;
  border-top-right-radius: ${SIZES.XS}rem;
`;
