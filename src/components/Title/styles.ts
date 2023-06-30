import styled, { css } from "styled-components";
import { TitleProps } from "./types";

type StyledTitleProps = Pick<TitleProps, "type">;

const TitleModifier = {
  primary: () => css`
    color: #f72585;
    border-color: #f72585;

    &::before {
      border-color: #f72585;
    }

    &:hover {
      background-color: #f72585;

      ::before {
        background-color: #f72585;
      }
    }
  `,
  secondary: () => css`
    color: #4361ee;
    border-color: #4361ee;

    &::before {
      border-color: #4361ee;
    }

    &:hover {
      background-color: #4361ee;

      ::before {
        background-color: #4361ee;
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
      background-color: white;
      transition: color 0.2s, background-color 0.2s;
    }

    &:hover {
      color: ${theme.colors.white};
    }

    ${type && TitleModifier[type]}
  `}
`;
