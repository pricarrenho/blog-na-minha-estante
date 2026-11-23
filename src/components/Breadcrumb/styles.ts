import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  width: 100%;
  margin-bottom: 24px;

  ol {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    max-width: 100%;
  }

  ${({ theme }) => css`
    a, [aria-current="page"] {
      padding: 4px 0;
      border-radius: ${theme.border.size};
      font-size: ${theme.font.sizes.sm};
      line-height: 1.2;
      overflow-wrap: anywhere;
    }

    a {
      color: ${theme.colors.neutral[600]};
      transition: color 0.3s ease;

      &:hover, &:focus-visible {
        color: ${theme.colors.primary[50]};
      }

      &:focus-visible {
        outline: 2px solid ${theme.colors.primary[50]};
        outline-offset: 2px;
      }
    }

    [aria-current="page"] {
      color: ${theme.colors.primary[50]};
      font-weight: 700;
    }

    svg {
      width: 0.9rem;
      height: 0.9rem;
      color: ${theme.colors.primary[50]};
      flex-shrink: 0;
    }
  `}
`;
