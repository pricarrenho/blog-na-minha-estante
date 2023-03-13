import styled, { css } from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.fuchsia[900]};
    margin-top: 56px;
    margin-bottom: 24px;
  `}
`;
