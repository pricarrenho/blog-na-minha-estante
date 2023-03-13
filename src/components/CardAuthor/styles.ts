import Image from "next/image";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 0px 24px;
  `}
`;

export const AuthorImg = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.fuchsia[800]};
    margin-top: 8px;
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
  `}
`;
