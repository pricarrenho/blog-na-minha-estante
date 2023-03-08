import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { themeWhite } from "styles/theme";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback: pageProps.fallback || {} }}>
      <ThemeProvider theme={themeWhite}>
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </SWRConfig>
  );
}
