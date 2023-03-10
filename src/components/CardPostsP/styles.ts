import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 800px;
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
  `}
`;

export const ContentCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    justify-items: center;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    transition: 0.2s;

    h3 {
      color: ${theme.colors.fuchsia[900]};
      font-size: ${theme.font.sizes.md};
      text-align: center;
    }

    &:hover {
      opacity: 0.8;
    }
  `}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
`;
