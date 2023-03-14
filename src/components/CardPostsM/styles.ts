import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    transition: 0.2s;

    &:hover {
      img {
        filter: brightness(0.9);
      }
      h2 {
        color: ${theme.colors.fuchsia[900]};
      }
    }
  `}
`;

export const LinkPost = styled(Link)`
  ${({ theme }) => css``}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: top center;
  border-radius: 4px;
  max-width: 100%;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const Subtitle = styled.h2`
  ${({ theme }) =>
    css`
      color: ${theme.colors.neutral[700]};
    `}
`;
