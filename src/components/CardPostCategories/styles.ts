import Image from "next/image";
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

      h3 {
        color: ${theme.colors.primary[100]};
      }
    }
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

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    transition: 0.2s;
    margin-bottom: 8px;
    color: ${theme.colors.primary[50]};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
    margin: 0;
  `}
`;
