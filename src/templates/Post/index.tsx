import { PostProps } from "./types";
import { Container } from "components/Container";
import * as S from "./styles";

export function PostTemplate({ post }: PostProps) {
  return (
    <Container>
      <S.Wrapper>
        <p>HEADER</p>
        <S.CardPost>
          <h1>{post.title}</h1>
          <main dangerouslySetInnerHTML={{ __html: post.content.html }} />
        </S.CardPost>
        <p>FOOTER</p>
      </S.Wrapper>
    </Container>
  );
}
