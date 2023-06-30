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
    margin-top: 32px;
    margin-bottom: 16px;
    position: relative;

    &::after {
      position: absolute;
      content: "";
      height: 1px;
      width: 80%;
      left: 10%;
      bottom: 50px;
      background: ${theme.colors.neutral[300]};
    }

    @media (min-width: 800px) {
      margin-top: 48px;
      margin-bottom: 40px;

      &::after {
        width: 100%;
        left: 0;
      }
    }
  `}
`;

export const ContentCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    justify-items: center;

    @media (min-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    img {
      transition: 0.4s;
    }

    &:hover {
      img {
        filter: brightness(1.2);
      }
      h3 {
        color: #f72585;
      }
    }
  `}
`;

export const PhotoBook = styled(Image)`
  ${({ theme }) => css`
    object-fit: cover;
    border-radius: ${theme.border.size};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  `}
`;

export const SubTitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[700]};
    font-size: ${theme.font.sizes.md};
    text-align: center;
  `}
`;
