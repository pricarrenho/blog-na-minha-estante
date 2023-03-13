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
          <S.LinkPost href={`/${post.category?.slug}/${post.slug}`}>
            <S.PhotoBook
              src={post.bannerImage.url}
              alt=""
              width={400}
              height={300}
            />
            <S.Subtitle>{post.title}</S.Subtitle>
          </S.LinkPost>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}

export default CardPostsM;
