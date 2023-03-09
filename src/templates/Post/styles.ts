import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
  `}
`;

export const CardPost = styled.div`
  ${({ theme }) => css`
    gap: 48px;
    background: ${theme.colors.fuchsia[50]};
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    h1 {
      color: ${theme.colors.fuchsia[900]};
    }
  `}
`;

export const Content = styled.div`
  padding: 24px;
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  object-position: center center;
  border-radius: 8px 8px 0px 0px;
`;
