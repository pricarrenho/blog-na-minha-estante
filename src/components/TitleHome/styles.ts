import styled, { css } from "styled-components";
import { Gloria_Hallelujah } from "next/font/google";

const gloria = Gloria_Hallelujah({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 48px 0 110px;

    @media (min-width: 800px) {
      padding: 90px 0 160px;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xl};
    line-height: 40px;
    font-weight: 600;
    color: ${theme.colors.primary[50]};
    margin-bottom: 16px;
    font-family: ${gloria.style.fontFamily};

    @media (min-width: 800px) {
      font-size: 48px;
      max-width: 900px;
      margin: 0 auto 32px;
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 24px;
    font-weight: 300;
    margin: 0 auto;
    color: ${theme.colors.neutral[800]};

    @media (min-width: 800px) {
      font-size: 20px;
      line-height: 30px;
      max-width: 790px;
    }
  `}
`;
