import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";
import { CardPostTalesProps } from "./types";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    @media (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

type CardProps = Pick<CardPostTalesProps, "type">;

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
    border-radius: ${theme.border.size};

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

export const LinkContent = styled(Link)`
  display: grid;
  grid-template-columns: auto 2fr;
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
    padding: 16px;

    @media (min-width: 800px) {
      padding: 8px 24px;
    }
  `}
`;

type SubtitleProps = Pick<CardPostTalesProps, "type">;

const SubtitleModifier = {
  primary: () => css`
    color: #f72585;
  `,
  secondary: () =>
    css`
      color: #4361ee;
    `,
};

export const Subtitle = styled.h3<SubtitleProps>`
  ${({ theme, type }) => css`
    color: #4361ee;
    transition: 0.2s;
    margin-bottom: 4px;
    font-size: ${theme.font.sizes.md};

    ${type && SubtitleModifier[type]}
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 20px;
    text-align: left;
    margin: 0;
  `}
`;
