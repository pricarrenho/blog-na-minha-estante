import { Container } from "components/Container";
import { Header } from "components/Header";
import { getPost } from "service/post/getPost";
import useSWR from "swr";
import * as S from "./styles";

export type PostTemplateProps = {
  post: string;
};

export function PostTemplate({ post }: PostTemplateProps) {
  const { data } = useSWR(`/api/post/${post}`, () => getPost(post));

  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          {data && (
            <S.CardPost>
              <h1>{data.title}</h1>
              <main dangerouslySetInnerHTML={{ __html: data.content.html }} />
            </S.CardPost>
          )}
          <p>FOOTER</p>
        </S.Wrapper>
      </Container>
    </>
  );
}
