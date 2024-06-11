import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
    position: sticky;
    top: 0;
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;

    @media (min-width: 800px) {
      height: 90px;
    }
  `}
`;

type MenuContentProps = {
  show: boolean;
};

export const MenuContentModifier = {
  show: () => css`
    left: 0;
  `,
};

export const MenuContent = styled.div<MenuContentProps>`
  ${({ theme, show }) => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 40px;
    height: calc(100vh - 68px);
    box-sizing: border-box;
    text-align: center;
    position: fixed;
    top: 68px;
    left: 100vw;
    width: 100vw;
    background-color: ${theme.colors.white};
    box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.1);
    z-index: 1;
    transition: left 0.4s;

    ${show && MenuContentModifier.show}

    @media (min-width: 800px) {
      display: flex !important;
      padding: 0px;
      flex-direction: row;
      box-shadow: none;
      position: unset;
      width: max-content;
      height: 100%;
      align-items: center;
    }
  `}
`;

export const CategoriesLink = styled(Link)`
  ${({ theme }) => css`
    color: ${theme.colors.neutral[900]};
    padding: 20px 10px;
    transition: 0.2s;

    &:hover {
      color: ${theme.colors.primary[50]};
    }
  `}
`;

export const ImageLogo = styled(Image)`
  object-fit: contain;
  display: block;
  height: 40px;
  width: auto;

  @media (min-width: 800px) {
    height: 60px;
    width: 100%;
  }
`;

type MenuProps = {
  isOpen: boolean;
};

const MenuModifier = {
  isOpen: () => css`
    &:before {
      transform: translateY(12px) rotate(135deg);
      margin-left: -3px;
    }
    &:after {
      transform: translateY(-12px) rotate(-135deg);
      margin-top: 15px;
      margin-left: -3px;
    }
    & div {
      transform: scale(0);
    }
  `,
};

export const Menu = styled.button<MenuProps>`
  ${({ isOpen, theme }) => css`
    border: none;
    background: transparent;

    &:before,
    &:after,
    div {
      content: " ";
      position: relative;
      display: block;
      height: 2px;
      width: 22px;
      background: ${theme.colors.black};
      border-radius: ${theme.border.size};
      margin: 5px 0;
      transition: 0.5s;
    }

    ${isOpen && MenuModifier.isOpen}

    @media (min-width: 800px) {
      display: none;
    }
  `}
`;
