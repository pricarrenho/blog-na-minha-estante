import { getPosts } from "service/post/getPosts";
import useSWR from "swr";
import Container from "components/Container";
import CardPostsHome from "components/CardPostsHome";
import Footer from "components/Footer";
import Header from "components/Header";
import SimpleSlider from "components/SimpleSlider";
import Title from "components/Title";
import TitleHome from "components/TitleHome";
import * as S from "./styles";
import Link from "next/link";

export function HomeTemplate() {
  const { data } = useSWR("/api/posts", getPosts);

  const contos = data?.filter((item) => item?.category?.slug === "contos");
  const resenhas = data?.filter((item) => item?.category?.slug === "resenhas");
  const autores = data?.filter((item) => item?.category?.slug === "autores");

  return (
    <main>
      <Header />
      <Container>
        <TitleHome />
      </Container>

      <S.CustomContainer>
        <SimpleSlider item={data} />
      </S.CustomContainer>

      <Container>
        <Link href="/contos">
          <Title>Contos</Title>
        </Link>
        <CardPostsHome item={contos} />

        <Link href="/resenhas">
          <Title>Resenhas</Title>
        </Link>
        <CardPostsHome item={resenhas} />

        <Link href="/autores">
          <Title>Autores</Title>
        </Link>
        <CardPostsHome item={autores} />
      </Container>
      <Footer />
    </main>
  );
}
