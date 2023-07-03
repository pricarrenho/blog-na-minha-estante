import Image from "next/image";
import styled, { DefaultTheme, css } from "styled-components";
import { CardPostAuthorProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  `}
`;

export const ContentCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;
    cursor: pointer;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

type CardProps = Pick<CardPostAuthorProps, "type">;

const CardModifier = {
  primary: (theme: DefaultTheme) => css`
    &:hover {
      &::before {
        background: linear-gradient(
          180deg,
          rgba(46, 45, 45, 0) 0,
          ${theme.colors.primary[50]}66
        );
      }
    }
  `,
  secondary: (theme: DefaultTheme) =>
    css`
      &:hover {
        h3 {
          color: ${theme.colors.secondary[300]};
        }
      }
    `,
};

export const Card = styled.div<CardProps>`
  ${({ theme, type }) => css`
    position: relative;
    overflow: hidden;
    border-radius: ${theme.border.size};

    &::before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(46, 45, 45, 0) 0,
        rgba(46, 45, 45, 0.7) 59.85%
      );
    }

    img {
      transition: 0.4s;
    }

    &:hover {
      img {
        filter: brightness(1.2);
      }
    }

    ${type && CardModifier[type](theme)}
  `}
`;

export const PhotoBook = styled(Image)`
  ${({ theme }) => css`
    object-fit: cover;
    object-position: top center;
    position: relative;
    display: block;
    width: 100%;
    aspect-ratio: 1/1;
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 2;
    color: ${theme.colors.white};
  `}
`;
