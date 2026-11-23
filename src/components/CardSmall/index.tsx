import type { GetPostsQuery } from "gql/graphql";
import Link from "next/link";
import * as S from "./styles";

export function CardSmall({ posts }: { posts: GetPostsQuery["posts"] }) {
  return (
    <S.Wrapper>
      <S.Title>Você também pode gostar </S.Title>

      <S.ContentCard>
        {posts.map((post) => (
          <S.Card key={post.slug}>
            <Link href={`/${post.category?.slug}/${post.slug}`}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt=""
                width={250}
                height={200}
              />

              <S.SubTitle>{post.title}</S.SubTitle>
            </Link>
          </S.Card>
        ))}
      </S.ContentCard>
    </S.Wrapper>
  );
}
