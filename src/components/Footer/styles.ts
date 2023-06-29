import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #f72585;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 8px 0px;
    margin-top: 40px;

    @media (min-width: 800px) {
      padding: 16px 0px;
      margin-top: 80px;
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
    color: white;

    a {
      font-size: ${theme.font.sizes.sm};
      color: black;
      transition: 0.2s;
    }

    a:hover {
      color: ${theme.colors.white};
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;
