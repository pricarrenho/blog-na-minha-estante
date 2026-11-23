import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px;
  margin: 40px 0;

  @media (min-width: 800px) {
    gap: 8px;
    margin: 48px 0;
  }
`;

export const PageGroup = styled.span`
  display: inline-flex;
  align-items: center;
  gap: inherit;
`;

const pageControl = css`
  ${({ theme }) => css`
    display: inline-grid;
    place-items: center;
    box-sizing: border-box;
    min-width: 32px;
    height: 40px;
    padding: 0 5px;
    border-radius: ${theme.border.size};
    font-size: ${theme.font.sizes.sm};
    font-weight: 500;

    @media (min-width: 800px) {
      min-width: 42px;
      height: 42px;
    }
  `}
`;

export const PageLink = styled(Link)`
  ${pageControl}

  ${({ theme }) => css`
    color: ${theme.colors.primary[100]};
    transition: color 0.2s, background-color 0.2s;

    &:hover, &:focus-visible {
      color: ${theme.colors.primary[200]};
      background: ${theme.colors.neutral[100]};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary[50]};
      outline-offset: 2px;
    }
  `}
`;

export const Current = styled.span`
  ${pageControl}
  color: ${({ theme }) => theme.colors.primary[100]};
  background: ${({ theme }) => `color-mix(in srgb, ${theme.colors.primary[50]} 9%, ${theme.colors.white})`};
  font-weight: 700;
`;

export const ArrowLink = styled(PageLink)`
  &:hover, &:focus-visible {
    background: transparent;
  }

  &:focus-visible {
    outline: none;
    text-decoration: underline 2px;
    text-underline-offset: 4px;
  }
`;

export const Unavailable = styled.span`
  ${pageControl}
  color: ${({ theme }) => theme.colors.neutral[400]};
`;

export const Chevron = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.md};
  line-height: 1;
`;

export const Gap = styled.span`
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: ${({ theme }) => theme.font.sizes.sm};
`;
