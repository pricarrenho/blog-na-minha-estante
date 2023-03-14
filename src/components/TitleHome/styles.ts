import styled, { css } from "styled-components";
import { Gloria_Hallelujah } from "@next/font/google";

const gloria = Gloria_Hallelujah({
  weight: ["400"],
  subsets: ["latin"],
});

export const Wrapper = styled.div`
  ${({ theme }) => css`
    font-family: ${gloria.style.fontFamily}, sans-serif;
    text-align: center;
    margin-bottom: 80px;
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxl};
    color: ${theme.colors.fuchsia[800]};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.neutral[700]};
    line-height: 4px;
  `}
`;
