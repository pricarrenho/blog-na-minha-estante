import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

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

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    img {
      transition: 0.4s;
    }

    &:hover {
      img {
        filter: brightness(1.2);
      }
      h2 {
        color: #f72585;
      }
    }
  `}
`;

export const LinkPost = styled(Link)`
  ${({ theme }) => css``}
`;

export const PhotoBook = styled(Image)`
  ${({ theme }) => css`
    object-fit: cover;
    object-position: top center;
    border-radius: ${theme.border.size};
    max-width: 100%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    height: 200px;

    @media (min-width: 800px) {
      height: 300px;
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) =>
    css`
      color: ${theme.colors.neutral[700]};
    `}
`;
