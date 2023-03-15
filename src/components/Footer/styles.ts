import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fuchsia[200]};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 16px 0px;
    margin-top: 80px;

    @media (max-width: 800px) {
      padding: 8px 0px;
      margin-top: 40px;
    }
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    text-align: center;
    font-size: ${theme.font.sizes.sm};

    @media (max-width: 800px) {
      font-size: ${theme.font.sizes.ssm};
      line-height: 24px;
    }
  `}
`;
