import { useRouter } from "next/router";
import { CategoryProps } from "./types";
import Header from "components/Header";
import Container from "components/Container";
import * as S from "./styles";
import CardPostsM from "components/CardPostsM";
import Footer from "components/Footer";
import Title from "components/Title";

export function CategoryTemplate({ category }: CategoryProps) {
  const route = useRouter();

  return (
    <main>
      <Header />
      <Container>
        <Title>Últimas Resenhas</Title>
        <CardPostsM />
      </Container>
      <Footer />
    </main>
  );
}
