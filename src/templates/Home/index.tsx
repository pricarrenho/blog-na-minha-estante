import CardPostsG from "components/CardPostsG";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import SimpleSlider from "components/SimpleSlider";
import Title from "components/Title";
import TitleHome from "components/TitleHome";

export function HomeTemplate() {
  return (
    <main>
      <Header />
      <Container>
        <TitleHome />

        <SimpleSlider />

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
