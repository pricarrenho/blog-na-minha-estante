import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 48px;
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    text-align: center;
    text-transform: uppercase;
    font-weight: 200;
    margin-top: 48px;
    margin-bottom: 40px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      bottom: 50px;
      left: 0;
      background: ${theme.colors.neutral[300]};
    }

    @media (max-width: 800px) {
      margin-top: 24px;
      margin-bottom: 16px;

      &::after {
        width: 80%;
        left: 10%;
      }
    }
  `}
`;

export const ContentCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    justify-items: center;

    @media (max-width: 800px) {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    transition: 0.2s;

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
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.md};
    text-align: center;
  `}
`;
