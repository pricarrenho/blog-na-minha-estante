import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fuchsia[200]};
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 48px;
  `}
`;

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    padding: 8px;
  `}
`;

export const MenuContent = styled.div`
  ${() => css`
    display: flex;
    gap: 24px;
    padding: 16px 0px;
  `}
`;
