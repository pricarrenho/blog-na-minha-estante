import { createGlobalStyle, css } from "styled-components";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
      background: ${theme.colors.background};
    }

    body,
    input,
    textarea,
    button {
      font-family: ${poppins.style.fontFamily}, sans-serif;
      font-weight: 400;
    }

    a {
      text-decoration: none;
      font-size: ${theme.font.sizes.md};
      font-weight: 500;
      color: ${theme.colors.fuchsia[900]};

      &:hover {
        color: ${theme.colors.fuchsia[600]};
      }
    }

    li {
      list-style: none;
    }

    h1 {
      font-size: ${theme.font.sizes.xl};
    }

    p,
    blockquote {
      color: ${theme.colors.neutral[500]};
      font-size: ${theme.font.sizes.md};
      line-height: 32px;
      text-align: justify;
    }

    blockquote {
      background: ${theme.colors.fuchsia[100]};
      font-weight: 500;
      padding: 16px;
      border-radius: 8px;
      text-align: center;
      margin: 32px;
    }

    button {
      cursor: pointer;
    }
  `}
`;
