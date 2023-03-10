import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 48px;
    padding: 48px;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    max-width: 100%;
    background: ${theme.colors.fuchsia[50]};
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
  `}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
`;

export const Subtitle = styled.h2`
  margin-top: 24px;
`;

export const Description = styled.p`
  text-align: center;
`;

export const LinkPost = styled(Link)``;
