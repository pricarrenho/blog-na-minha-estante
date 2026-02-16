import { createGlobalStyle, css } from "styled-components";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
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

    body.no-scroll {
      overflow: hidden;
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

    ::selection {
      color: ${theme.colors.white};
      background: ${theme.colors.primary[50]};
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
      line-height: 24px;
      text-align: justify;

      @media (min-width: 800px) {
        line-height: 32px;
      }
    }

    button {
      cursor: pointer;
    }
  `}
`;
