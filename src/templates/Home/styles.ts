import Container from "components/Container";
import Link from "next/link";
import styled, { css } from "styled-components";

export const CustomContainer = styled(Container)`
  padding: 0;

  @media (min-width: 800px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const LinkCategory = styled(Link)`
  ${({ theme }) => css`
    h2 {
      transition: 0.2s;

      ::before {
        transition: color 0.2s, background-color 0.2s;
      }
    }

    h2:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.fuchsia[900]};

      ::before {
        background-color: ${theme.colors.fuchsia[900]};
      }
    }
  `}
`;
