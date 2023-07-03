import styled, { DefaultTheme, css } from "styled-components";
import { TitleProps } from "./types";

type StyledTitleProps = Pick<TitleProps, "type">;

const TitleModifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary[50]};
    border-color: ${theme.colors.primary[50]};

    &::before {
      border-color: ${theme.colors.primary[50]};
    }

    &:hover {
      background-color: ${theme.colors.primary[50]};

      ::before {
        background-color: ${theme.colors.primary[50]};
      }
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary[200]};
    border-color: ${theme.colors.secondary[200]};

    &::before {
      border-color: ${theme.colors.secondary[200]};
    }

    &:hover {
      background-color: ${theme.colors.secondary[200]};

      ::before {
        background-color: ${theme.colors.secondary[200]};
      }
    }
  `,
};

export const Title = styled.h2<StyledTitleProps>`
  ${({ theme, type }) => css`
    display: inline-block;
    margin-bottom: 24px;
    border-style: solid;
    padding: 4px 16px;
    position: relative;
    font-size: ${theme.font.sizes.lg};
    transition: 0.2s;
    border-width: 3px;

    @media (min-width: 800px) {
      margin-bottom: 32px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 16px;
      border-style: solid;
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(45deg);
      background-color: ${theme.colors.white};
      transition: color 0.2s, background-color 0.2s;
    }

    &:hover {
      color: ${theme.colors.white};
    }

    ${type && TitleModifier[type](theme)}
  `}
`;
