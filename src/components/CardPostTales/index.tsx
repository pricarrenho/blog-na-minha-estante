import { CardPostTalesProps } from "./types";
import * as S from "./styles";

export function CardPostTales({ item, type }: CardPostTalesProps) {
  return (
    <S.Wrapper>
      {item
        ?.map((post) => (
          <S.Card key={post.title} type={type}>
            <S.LinkContent href={`/${post.category?.slug}/${post.slug}`}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt={post.title}
                width={150}
                height={150}
              />

              <S.Content>
                <S.Subtitle type={type}>{post.title}</S.Subtitle>

                <S.Description>{post.description}</S.Description>
              </S.Content>
            </S.LinkContent>
          </S.Card>
        ))
        .slice(0, 3)}
    </S.Wrapper>
  );
}
