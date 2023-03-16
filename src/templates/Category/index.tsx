import { CategoryProps } from "./types";
import { getPostsByCategory } from "service/post/getPostsbyCategory";
import useSWR from "swr";
import Header from "components/Header";
import Container from "components/Container";
import CardPostsCategories from "components/CardPostsCategories";
import Footer from "components/Footer";
import Title from "components/Title";

export function CategoryTemplate({ category }: CategoryProps) {
  const categorySlug = category?.slug as string;

  const { data } = useSWR(`/api/posts/${categorySlug}`, () =>
    getPostsByCategory(categorySlug)
  );

  return (
    <main>
      <Header />
      <Container>
        <Title>Últimas Postagens</Title>
        <CardPostsCategories items={data} />
      </Container>
      <Footer />
    </main>
  );
}
