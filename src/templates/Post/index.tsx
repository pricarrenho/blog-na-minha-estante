import Head from "next/head";
import { Breadcrumb, type BreadcrumbItem } from "components/Breadcrumb";
import { CardAuthor } from "components/CardAuthor";
import { CardSmall } from "components/CardSmall";
import { Container } from "components/Container";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import type { PostTemplateProps } from "./types";
import * as S from "./styles";

export function PostTemplate({ post, recommendations }: PostTemplateProps) {
  const { bannerImage, category, content, description, subcategories, title } = post;
  const subcategory = category?.slug === "resenhas" ? subcategories[0] : undefined;
  const trail: BreadcrumbItem[] = [];
  if (category?.slug) {
    trail.push({ label: category.name ?? category.slug, href: `/${category.slug}` });
  }
  if (subcategory) {
    trail.push({
      label: subcategory.name,
      href: `/resenhas/subcategorias/${subcategory.slug}`,
    });
  }
  trail.push({ label: title });

  return (
    <>
      <Head>
        <title>{`Na Minha Estante - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />
      <Container>
        <S.WrapperContent>
          <S.PostBreadcrumb><Breadcrumb items={trail} /></S.PostBreadcrumb>
          <S.CardPost>
            <S.PhotoBook
              src={bannerImage.url}
              alt=""
              width={800}
              height={150}
              loading="eager"
            />
            <S.Content>
              <S.Title>{title}</S.Title>
              <S.PhotoBookInside
                src={bannerImage.url}
                alt="Foto do livro"
                width={700}
                height={500}
                loading="eager"
              />
              <main dangerouslySetInnerHTML={{ __html: content.html }} />
            </S.Content>
          </S.CardPost>

          <S.Sidebar>
            <CardAuthor />
          </S.Sidebar>
          {recommendations.length > 0 && (
            <S.RelatedPosts><CardSmall posts={recommendations} /></S.RelatedPosts>
          )}
        </S.WrapperContent>
      </Container>
      <Footer />
    </>
  );
}
