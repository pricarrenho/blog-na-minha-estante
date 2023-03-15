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

    body,
    h1,
    h2,
    h3 {
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
      font-weight: 600;
    }

    li {
      list-style: none;
    }

    h1 {
      font-size: ${theme.font.sizes.xl};
    }

    p {
      color: ${theme.colors.neutral[500]};
      font-size: ${theme.font.sizes.md};
      line-height: 32px;
      text-align: justify;

      @media (max-width: 800px) {
        line-height: 24px;
      }
    }

    blockquote {
      color: ${theme.colors.neutral[600]};
      background: ${theme.colors.fuchsia[100]};
      font-size: ${theme.font.sizes.md};
      font-weight: 500;
    }

    button {
      cursor: pointer;
    }
  `}
`;
