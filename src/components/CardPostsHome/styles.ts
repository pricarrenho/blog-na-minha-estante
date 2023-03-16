import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 32px;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 48px;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.fuchsia[50]};
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

    &:hover {
      img {
        filter: brightness(1.2);
      }
      h3 {
        color: ${theme.colors.fuchsia[900]};
      }
    }
  `}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: top center;
  border-radius: 8px 8px 0px 0px;
  max-width: 100%;
  transition: 0.2s;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 16px 24px;
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    transition: 0.2s;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
  `}
`;
