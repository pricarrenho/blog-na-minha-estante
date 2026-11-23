import type { AppProps } from "next/app";
import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/global";
import { themeWhite } from "styles/theme";
import { SWRConfig } from "swr";

const UnavailablePage = styled.div`
  min-height: 100dvh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const UnavailableContent = styled.main`
  padding-top: 48px;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{
      fallback: { "/api/categories": pageProps.navigationCategories, ...pageProps.fallback },
    }}>
      <ThemeProvider theme={themeWhite}>
        {pageProps.contentUnavailable ? (
          <UnavailablePage>
            <Header />
            <UnavailableContent>
              <Container>
                <h1>Conteúdo temporariamente indisponível</h1>
                <p>Não foi possível carregar as publicações. Recarregue a página para tentar novamente.</p>
              </Container>
            </UnavailableContent>
            <Footer />
          </UnavailablePage>
        ) : <Component {...pageProps} />}
        <GlobalStyle />
      </ThemeProvider>
    </SWRConfig>
  );
}
