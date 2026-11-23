import Head from "next/head";
import { Breadcrumb } from "components/Breadcrumb";
import { CardPostsCategories } from "components/CardPostCategories";
import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Pagination } from "components/Pagination";
import type { CategoryProps } from "./types";
import * as S from "./styles";

export function CategoryTemplate({
  title, description, breadcrumbs, posts, page, pageCount, path, search,
}: CategoryProps) {
  return (
    <>
      <Head>
        <title>{`Na Minha Estante - ${title}`}</title>
        {description && <meta name="description" content={description} />}
      </Head>
      <Header search={search} />
      <Container>
        <S.Content as="main">
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
          <S.Title>{title} <span aria-hidden="true">❤</span></S.Title>
          {search && <p>Resultados para “{search}”</p>}
          {posts.length > 0 ? (
            <CardPostsCategories items={posts} />
          ) : (
            <p>{search === "" ? "Digite um termo para pesquisar." : "Nenhuma publicação encontrada."}</p>
          )}
          <Pagination page={page} pageCount={pageCount} path={path} search={search} />
        </S.Content>
      </Container>
      <Footer />
    </>
  );
}
