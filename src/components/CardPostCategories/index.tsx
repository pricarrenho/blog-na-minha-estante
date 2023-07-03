import * as S from "./styles";

export function CardPostsCategories({ items }: any) {
  return (
    <S.Wrapper>
      {items?.map((post: any) => (
        <S.Card key={post.title}>
          <S.LinkPost href={`/${post.category?.slug}/${post.slug}`}>
            <S.PhotoBook
              src={post.bannerImage.url}
              alt={post.title}
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
