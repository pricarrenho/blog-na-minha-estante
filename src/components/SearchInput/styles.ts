import Link from "next/link";
import styled, { css } from "styled-components";

export const Form = styled.form`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    align-items: center;
    min-width: 0;
    min-height: 42px;
    border: 1px solid ${theme.colors.neutral[300]};
    border-radius: ${theme.border.size};
    color: ${theme.colors.neutral[500]};
    transition: border-color 0.3s ease, color 0.3s ease;

    &:focus-within {
      border-color: ${theme.colors.primary[50]};
      color: ${theme.colors.primary[50]};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    min-width: 0;
    width: 100%;
    padding: 8px 0 8px 14px;
    border: 0;
    outline: none;
    background: transparent;
    color: ${theme.colors.neutral[900]};
    font-size: ${theme.font.sizes.sm};
    text-overflow: ellipsis;

    &::-webkit-search-cancel-button {
      appearance: none;
    }

    &::placeholder {
      color: ${theme.colors.neutral[600]};
    }
  `}
`;

export const Submit = styled.button`
  ${({ theme }) => css`
    display: grid;
    place-items: center;
    flex: 0 0 36px;
    height: 36px;
    border: 0;
    border-radius: ${theme.border.size};
    color: inherit;
    background: transparent;

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary[50]};
      outline-offset: -3px;
    }
  `}
`;


export const Clear = styled(Submit)`
  color: ${({ theme }) => theme.colors.primary[50]};
`;

export const Suggestions = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 2;
    top: calc(100% + 6px);
    inset-inline: 0;
    max-height: min(280px, 50dvh);
    overflow-y: auto;
    border: 1px solid ${theme.colors.neutral[200]};
    border-radius: ${theme.border.size};
    background: ${theme.colors.background};
    box-shadow: 0 4px 12px ${theme.colors.boxShadow};
  `}
`;

export const SuggestionsList = styled.ul`
  margin: 0;
  padding: 4px;
`;

export const SuggestionLink = styled(Link)`
  ${({ theme }) => css`
    display: grid;
    gap: 2px;
    padding: 8px;
    border-radius: ${theme.border.size};
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.neutral[900]};

    small {
      font-weight: 400;
      color: ${theme.colors.neutral[600]};
    }

    &:hover, &:focus-visible {
      background: ${theme.colors.neutral[100]};
      color: ${theme.colors.primary[50]};
    }

    &:focus-visible {
      outline: 2px solid ${theme.colors.primary[50]};
      outline-offset: -2px;
    }
  `}
`;

export const Status = styled.p`
  margin: 0;
  padding: 10px;
  font-size: ${({ theme }) => theme.font.sizes.sm};
  line-height: 1.5;
  text-align: left;
`;
