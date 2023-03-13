import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  `}
`;

export const CardPost = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.fuchsia[50]};
    box-shadow: 0 0 16px 2px ${theme.colors.boxShadow};
    border-radius: 8px;
    margin-bottom: 48px;
  `}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
  mask-image: linear-gradient(to top, transparent 10%, white 75%);
  opacity: 0.5;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0px 48px 40px;
    display: grid;

    h1 {
      margin-top: -56px;
    }

    blockquote {
      margin-top: 64px;
    }
  `}
`;

export const PhotoBookLeft = styled(Image)``;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
