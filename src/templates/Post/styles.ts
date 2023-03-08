import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css`
    display: grid;
    justify-content: center;
  `}
`;

export const CardPost = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.fuchsia[50]};
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px 40px;

    h1 {
      color: ${theme.colors.fuchsia[900]};
    }
  `}
`;
