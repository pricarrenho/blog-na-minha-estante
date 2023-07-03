import Image from "next/image";
import styled, { DefaultTheme, css } from "styled-components";
import { CardPostReviewsProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 48px;
    }
  `}
`;

type CardPostProps = Pick<CardPostReviewsProps, "type">;

const CardModifier = {
  primary: (theme: DefaultTheme) => css`
    &:hover {
      h3 {
        color: ${theme.colors.primary[100]};
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

export const Card = styled.div<CardPostProps>`
  ${({ theme, type }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;

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

const SubtitleModifier = {
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.primary[50]};
  `,
  secondary: (theme: DefaultTheme) =>
    css`
      color: ${theme.colors.secondary[200]};
    `,
};

export const Subtitle = styled.h3<CardPostProps>`
  ${({ theme, type }) => css`
    transition: 0.2s;
    margin-bottom: 8px;

    ${type && SubtitleModifier[type](theme)}
  `}
`;

export const PhotoBook = styled(Image)`
  ${({ theme }) => css`
    object-fit: cover;
    object-position: top center;
    border-radius: ${theme.border.size};
    max-width: 100%;
    transition: 0.2s;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 16px;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
    margin: 0;
  `}
`;
