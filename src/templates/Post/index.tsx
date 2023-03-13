import Container from "components/Container";
import Header from "components/Header";
import { getPost } from "service/post/getPost";
import { PostTemplateProps } from "./types";
import CardAuthor from "components/CardAuthor";
import Footer from "components/Footer";

import useSWR from "swr";
import * as S from "./styles";
import CardPostsP from "components/CardPostsP";
import Title from "components/Title";

export function PostTemplate({ post }: PostTemplateProps) {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));

  return (
    <>
      <Header />

      <Container>
        <S.Wrapper>
          {data && (
            <S.CardPost>
              <S.PhotoBook
                src={data.bannerImage.url}
                alt="Foto do livro"
                width={800}
                height={150}
              />

              <S.Content>
                <Title>{data.title}</Title>
                {data && (
                  <S.PhotoBookLeft
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

          <S.LeftContent>
            <CardAuthor />
          </S.LeftContent>
        </S.Wrapper>

        <CardPostsP title />
      </Container>

      <Footer />
    </>
  );
}
