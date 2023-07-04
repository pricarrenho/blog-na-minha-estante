import styled, { css } from "styled-components";

export const Content = styled.div`
  min-height: calc(100vh - 95px - 84px);
  margin-top: 48px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary[50]};
    margin-bottom: 36px;
    line-height: 36px;
    position: relative;

    span {
      font-size: 24px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.neutral[200]};
      bottom: -5px;
      left: 0;
    }

    @media (min-width: 800px) {
      margin-bottom: 48px;
      line-height: 48px;
    }
  `}
`;
