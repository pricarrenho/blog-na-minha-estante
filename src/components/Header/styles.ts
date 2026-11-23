import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    z-index: 2;
    position: sticky;
    top: 0;
  `}
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  min-height: 60px;

  @media (min-width: 800px) {
    grid-template-columns: auto minmax(0, 1fr);
    justify-content: space-between;
    gap: 16px;
    min-height: 90px;
  }
`;

export const MenuContent = styled.nav<{ $show: boolean }>`
  ${({ theme, $show }) => css`
    display: ${$show ? "flex" : "none"};
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    border-top: 60px solid ${theme.colors.white};
    padding: 16px 24px max(24px, env(safe-area-inset-bottom));
    box-sizing: border-box;
    position: fixed;
    inset: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    background-color: ${theme.colors.white};

    @media (min-width: 800px) {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto;
      align-items: center;
      gap: 16px;
      border-top: 0;
      padding: 0;
      position: static;
      overflow: visible;
    }
  `}
`;

export const Brand = styled(Link)`
  position: relative;
  z-index: 1;
`;

export const Search = styled.div`
  width: 100%;
  min-width: 0;
  flex-shrink: 0;

  @media (min-width: 800px) {
    max-width: 240px;
    justify-self: center;
  }
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

export const Submenu = styled.ul`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 0;
    padding: 0 0 0 18px;

    @media (min-width: 800px) {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      min-width: 210px;
      padding: 8px 6px 6px;
      background: ${theme.colors.white};
      border: 1px solid ${theme.colors.neutral[300]};
      border-radius: ${theme.border.size};
      box-shadow: 0 4px 8px ${theme.colors.boxShadow};
    }

    @media (min-width: 1024px) {
      right: auto;
      left: 0;
    }
  `}
`;

export const MenuItem = styled.div<{ $dismissed: boolean }>`
  position: relative;

  @media (min-width: 800px) {
    ${({ $dismissed }) => !$dismissed && css`
      &:hover ${Submenu}, &:focus-within ${Submenu} {
        display: flex;
      }
    `}
  }
`;

export const CategoriesLink = styled(Link)`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.neutral[900]};
    padding: 8px;
    font-weight: 700;

    &[aria-current], &:hover, &:focus-visible {
      color: ${theme.colors.primary[50]};
    }
  `}
`;

export const HomeLink = styled(CategoriesLink)`
  @media (min-width: 800px) {
    display: none;
  }
`;

export const SubmenuLink = styled(CategoriesLink)`
  ${({ theme }) => css`
    padding: 6px 0;
    font-weight: 400;

    @media (min-width: 800px) {
      padding: 8px 10px;
      border-radius: ${theme.border.size};

      &[aria-current="page"], &:hover, &:focus-visible {
        background: ${theme.colors.neutral[100]};
      }
    }
  `}
`;

export const ImageLogo = styled(Image)`
  object-fit: contain;
  display: block;
  width: auto;
  height: 34px;

  @media (min-width: 800px) {
    height: 60px;
  }
`;

export const Menu = styled.button<{ $isOpen: boolean }>`
  ${({ $isOpen, theme }) => css`
    position: relative;
    z-index: 1;
    border: none;
    background: transparent;

    &:before, &:after, span {
      content: "";
      display: block;
      height: 2px;
      width: 22px;
      background: ${theme.colors.black};
      border-radius: ${theme.border.size};
      margin: 5px 0;
      transition: transform 0.2s;
    }

    ${$isOpen && css`
      &:before { transform: translateY(7px) rotate(45deg); }
      &:after { transform: translateY(-7px) rotate(-45deg); }
      span { transform: scale(0); }
    `}

    @media (min-width: 800px) {
      display: none;
    }
  `}
`;
