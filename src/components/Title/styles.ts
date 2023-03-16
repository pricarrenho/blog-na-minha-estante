import styled, { css } from "styled-components";

export const Title = styled.h2`
  ${({ theme }) => css`
    display: inline-block;
    color: ${theme.colors.fuchsia[900]};
    margin-top: 40px;
    margin-bottom: 24px;
    border: 3px solid ${theme.colors.fuchsia[900]};
    padding: 4px 16px;
    position: relative;
    font-size: ${theme.font.sizes.lg};

    @media (min-width: 800px) {
      margin-top: 80px;
      margin-bottom: 48px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -8px;
      left: 16px;
      border: solid ${theme.colors.fuchsia[900]};
      border-width: 0 3px 3px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(45deg);
      background-color: white;
    }
  `}
`;
