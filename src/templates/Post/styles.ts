import Image from "next/image";
import styled, { css } from "styled-components";

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-top: 48px;

    @media (min-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `}
`;

export const CardPost = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    border-radius: 8px;
    margin-bottom: 48px;
  `}
`;

export const PhotoBook = styled(Image)`
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
  mask-image: linear-gradient(to top, transparent 10%, white 75%);
  opacity: 0.5;
  width: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 0px 24px;
    display: grid;

    blockquote {
      margin: 64px 16px;
      padding: 24px;
      border-radius: 8px;
      text-align: center;
    }

    @media (min-width: 800px) {
      padding: 0px 48px 40px;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: #f72585;
    margin-top: 56px;
    margin-bottom: 24px;
    margin-top: -56px;
  `}
`;

export const PhotoBookInside = styled(Image)`
  width: 100%;
  object-fit: cover;
  height: 200px;

  @media (min-width: 800px) {
    height: 500px;
  }
`;

export const CardAuthorContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
