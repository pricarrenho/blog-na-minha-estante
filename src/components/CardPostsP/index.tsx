import Link from "next/link";
import { getPosts } from "service/post/getPosts";
import useSWR from "swr";
import * as S from "./styles";

function CardPostsP({ title }: any) {
  const { data } = useSWR("/api/posts", getPosts);

  return (
    <S.Wrapper>
      {title && <S.Title title={title}>Você também pode gostar </S.Title>}

      <S.ContentCard>
        {data
          ?.map((post) => (
            <S.Card key={post.title}>
              <Link href={`/${post.category?.slug}/${post.slug}`}>
                <S.PhotoBook
                  src={post.bannerImage.url}
                  alt=""
                  width={250}
                  height={200}
                />

                <h3>{post.title}</h3>
              </Link>
            </S.Card>
          ))
          .slice(0, 3)}
      </S.ContentCard>
    </S.Wrapper>
  );
}

export default CardPostsP;
