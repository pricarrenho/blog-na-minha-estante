import { getPosts } from "service/post/getPosts";
import useSWR from "swr";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import SimpleSlider from "components/SimpleSlider";
import Title from "components/Title";
import TitleHome from "components/TitleHome";
import CardPostReviews from "components/CardPostReviews";
import CardPostsTales from "components/CardPostTales";
import CardPostAuthor from "components/CardPostAuthor";
import * as S from "./styles";

export function HomeTemplate() {
  const { data } = useSWR("/api/posts", getPosts);

  const contos = data?.filter((item) => item?.category?.slug === "contos");
  const resenhas = data?.filter((item) => item?.category?.slug === "resenhas");
  const autores = data?.filter((item) => item?.category?.slug === "autores");

  return (
    <main>
      <Header />

      <TitleHome />

      <S.CustomContainer>
        <SimpleSlider item={data} />
      </S.CustomContainer>

      <Container>
        <S.SectionContent>
          <S.LinkCategory href="/resenhas">
            <Title type="primary">Resenhas</Title>
          </S.LinkCategory>

          <CardPostReviews type="primary" item={resenhas} />
        </S.SectionContent>

        <S.SectionContent>
          <S.LinkCategory href="/contos">
            <Title type="secondary">Contos</Title>
          </S.LinkCategory>

          <CardPostsTales type="secondary" item={contos} />
        </S.SectionContent>

        <S.SectionContent>
          <S.LinkCategory href="/autores">
            <Title type="primary">Autores</Title>
          </S.LinkCategory>

          <CardPostAuthor type="primary" item={autores} />
        </S.SectionContent>
      </Container>
      <Footer />
    </main>
  );
}
