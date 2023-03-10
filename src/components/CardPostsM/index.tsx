import Link from "next/link";
import { getPosts } from "service/post/getPosts";
import useSWR from "swr";
import * as S from "./styles";

function CardPostsM() {
  const { data } = useSWR("/api/posts", getPosts);

  return (
    <S.Wrapper>
      {data?.map((post) => (
        <S.Card key={post.title}>
          <S.PhotoBook
            src={post.bannerImage.url}
            alt=""
            width={380}
            height={184}
          />

          <S.Content>
            <S.Subtitle>{post.title}</S.Subtitle>

            <S.Description>{post.description}</S.Description>

            <S.LinkPost href={`/${post.category?.slug}/${post.slug}`}>
              Continuar lendo
            </S.LinkPost>
          </S.Content>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}

export default CardPostsM;
