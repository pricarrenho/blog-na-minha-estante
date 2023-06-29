import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 48px 0 96px;

    @media (min-width: 800px) {
      padding: 108px 0 160px;
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    font-weight: 600;
    color: #f72585;
    margin-bottom: 16px;

    @media (min-width: 800px) {
      font-size: 48px;

      max-width: 900px;
      margin: 0 auto 16px;
    }
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    line-height: 20px;
    font-weight: 300;
    max-width: 280px;
    margin: 0 auto;
    color: ${theme.colors.neutral[800]};

    @media (min-width: 800px) {
      font-size: 18px;
      line-height: 26px;
      max-width: 660px;
    }
  `}
`;
