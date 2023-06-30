import Image from "next/image";
import styled, { css } from "styled-components";
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

type CardProps = Pick<CardPostReviewsProps, "type">;

const CardModifier = {
  primary: () => css`
    &:hover {
      h3 {
        color: #b5179e;
      }
    }
  `,
  secondary: () =>
    css`
      &:hover {
        h3 {
          color: #3f37c9;
        }
      }
    `,
};

export const Card = styled.div<CardProps>`
  ${({ theme, type }) => css`
    background: white;
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

    ${type && CardModifier[type]}
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

type SubtitleProps = Pick<CardPostReviewsProps, "type">;

const SubtitleModifier = {
  primary: () => css`
    color: #f72585;
  `,
  secondary: () =>
    css`
      color: #4361ee;
    `,
};

export const Subtitle = styled.h3<CardPostReviewsProps>`
  ${({ theme, type }) => css`
    transition: 0.2s;
    margin-bottom: 8px;

    ${type && SubtitleModifier[type]}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
    margin: 0;
  `}
`;
