import Image from "next/image";
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
    background: ${theme.colors.fuchsia[50]};
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.2);
    transition: 0.2s;

    &:hover {
      opacity: 0.8;
      background: ${theme.colors.fuchsia[100]};
    }
  `}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: top center;
  border-radius: 8px 8px 0px 0px;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 16px 24px;
`;

export const Subtitle = styled.h2``;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
  `}
`;
