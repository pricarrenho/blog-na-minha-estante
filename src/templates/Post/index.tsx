import Head from "next/head";
import useSWR from "swr";
import { getPost } from "service/post/getPost";
import { PostTemplateProps } from "./types";
import { Container } from "components/Container";
import { Header } from "components/Header";
import { CardAuthor } from "components/CardAuthor";
import { Footer } from "components/Footer";
import { CardSmall } from "components/CardSmall";
import * as S from "./styles";

export function PostTemplate({ post }: PostTemplateProps) {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));

  return (
    <>
      <div>
        <Head>
          <title>Na Minha Estante - {data?.title} </title>
        </Head>
      </div>

      <Header />
      <Container>
        <S.WrapperContent>
          {data && (
            <S.CardPost>
              <S.PhotoBook
                src={data.bannerImage.url}
                alt="Foto do livro"
                width={800}
                height={150}
              />

              <S.Content>
                <S.Title>{data.title}</S.Title>

                {data && (
                  <S.PhotoBookInside
                    src={data.bannerImage.url}
                    alt="Foto do livro"
                    width={700}
                    height={500}
                  />
                )}

                <main dangerouslySetInnerHTML={{ __html: data.content.html }} />
              </S.Content>
            </S.CardPost>
          )}

          <S.CardAuthorContent>
            <CardAuthor />
          </S.CardAuthorContent>

          <CardSmall />
        </S.WrapperContent>
      </Container>
      <Footer />
    </>
  );
}
