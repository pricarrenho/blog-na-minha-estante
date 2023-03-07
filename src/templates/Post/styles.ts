import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${() => css``}
`;

export const CardPost = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.pink50};
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 24px 40px;
    max-width: 600px;
  `}
`;
