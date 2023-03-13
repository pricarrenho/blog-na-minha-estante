import CardPostsG from "components/CardPostsG";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import Title from "components/Title";
import * as S from "./styles";

export function HomeTemplate() {
  return (
    <main>
      <Header />
      <Container>
        <Title>Contos</Title>
        <CardPostsG />

        <Title>Resenhas</Title>
        <CardPostsG />

        <Title>Autores</Title>
        <CardPostsG />
      </Container>
      <Footer />
    </main>
  );
}
