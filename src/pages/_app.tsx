import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { themeWhite } from "styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeWhite}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
