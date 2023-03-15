import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fuchsia[200]};
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 48px;

    @media (max-width: 800px) {
      margin-bottom: 0px;
    }
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
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

export const CategoriesLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[900]};

    &:hover {
      color: ${theme.colors.fuchsia[900]};
    }
  `}
`;
