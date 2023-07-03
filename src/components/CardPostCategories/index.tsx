import Link from "next/link";
import * as S from "./styles";

export function CardPostsCategories({ items }: any) {
  const minifyDescription = (value: string) => {
    const maxLength = 90;

    return value.slice(0, maxLength).trim() + "...";
  };

  return (
    <S.Wrapper>
      {items?.map((post: any) => (
        <S.Card key={post.title}>
          <Link href={`/${post.category?.slug}/${post.slug}`}>
            <S.PhotoBook
              src={post.bannerImage.url}
              alt=""
              width={380}
              height={238}
            />

            <S.Content>
              <S.Subtitle>{post.title}</S.Subtitle>

              <S.Description>
                {" "}
                {minifyDescription(post.description)}
              </S.Description>
            </S.Content>
          </Link>
        </S.Card>
      ))}
    </S.Wrapper>
  );
}
