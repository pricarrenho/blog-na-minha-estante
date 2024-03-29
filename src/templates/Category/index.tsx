import Head from "next/head";
import useSWR from "swr";
import { CategoryProps } from "./types";
import { getPostsByCategory } from "service/post/getPostsbyCategory";
import { Header } from "components/Header";
import { Container } from "components/Container";
import { CardPostsCategories } from "components/CardPostCategories";
import { Footer } from "components/Footer";
import { Title } from "components/Title";
import * as S from "./styles";

export function CategoryTemplate({ category }: CategoryProps) {
  const categorySlug = category?.slug as string;
  const categoryDescription = category?.description as string;

  const { data } = useSWR(`/api/posts/${categorySlug}`, () =>
    getPostsByCategory(categorySlug)
  );

  const categoryTitle =
    categorySlug[0].toUpperCase() + categorySlug.substring(1);

  return (
    <>
      <div>
        <Head>
          <title> Na Minha Estante - {categoryTitle}</title>
          <meta name="description" content={categoryDescription} />
        </Head>
      </div>

      <Header />
      <Container>
        <S.Content>
          <S.Title>
            {categoryTitle} <span>❤</span>
          </S.Title>

          <CardPostsCategories items={data} />
        </S.Content>
      </Container>
      <Footer />
    </>
  );
}
