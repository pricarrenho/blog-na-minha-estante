import { useRouter } from "next/router";
import { CategoryProps } from "./types";
import Header from "components/Header";
import Container from "components/Container";
import * as S from "./styles";
import CardPostsM from "components/CardPostsM";
import Footer from "components/Footer";

export function CategoryTemplate({ category }: CategoryProps) {
  const route = useRouter();

  return (
    <main>
      <Header />
      <Container>
        <CardPostsM />
      </Container>
      <Footer />
    </main>
  );
}
