import { PostProps } from "./types";
import { Container } from "components/Container";
import * as S from "./styles";
import { Header } from "components/Header";

export function PostTemplate({ post }: PostProps) {
  return (
    <>
      <Header />
      <Container>
        <S.Wrapper>
          <S.CardPost>
            <h1>{post.title}</h1>
            <main dangerouslySetInnerHTML={{ __html: post.content.html }} />
          </S.CardPost>
          <p>FOOTER</p>
        </S.Wrapper>
      </Container>
    </>
  );
}
