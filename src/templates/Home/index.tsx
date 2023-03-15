import CardPostsHome from "components/CardPostsHome";
import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import SimpleSlider from "components/SimpleSlider";
import Title from "components/Title";
import TitleHome from "components/TitleHome";
import { getPosts } from "service/post/getPosts";
import useSWR from "swr";

export function HomeTemplate() {
  const { data } = useSWR("/api/posts", getPosts);

  console.log({ data });

  const contos = data?.filter((item) => item?.category?.slug === "contos");
  const resenhas = data?.filter((item) => item?.category?.slug === "resenhas");
  const autores = data?.filter((item) => item?.category?.slug === "autores");

  return (
    <main>
      <Header />
      <Container>
        <TitleHome />

        <SimpleSlider item={data} />

        <Title>Resenhas</Title>
        <CardPostsHome item={resenhas} />

        <Title>Autores</Title>
        <CardPostsHome item={autores} />

        <Title>Contos</Title>
        <CardPostsHome item={contos} />
      </Container>
      <Footer />
    </main>
  );
}
