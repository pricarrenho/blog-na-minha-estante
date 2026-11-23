import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 40px;
    background-color: ${theme.colors.primary[50]};

    @media (min-width: 800px) {
      margin-top: 80px;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 8px 0;

    @media (min-width: 800px) {
      padding: 16px 0;
    }
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    text-align: center;
    font-size: ${theme.font.sizes.ssm};
    line-height: 24px;
    padding: 0px 24px;
    color: ${theme.colors.white};

    a {
      font-size: ${theme.font.sizes.sm};
      color: ${theme.colors.white};
      transition: 0.2s;
    }

    a:hover {
      color: ${theme.colors.primary[100]};
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;
