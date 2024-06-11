import Link from "next/link";
import { CardPostAuthorProps } from "./types";
import * as S from "./styles";

export function CardPostAuthor({ item, type }: CardPostAuthorProps) {
  return (
    <S.ContentCard>
      {item
        ?.map((post) => (
          <Link href={`/${post.category?.slug}/${post.slug}`} key={post.title}>
            <S.Card type={type}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt=""
                width={350}
                height={350}
              />

              <S.SubTitle>{post.title}</S.SubTitle>
            </S.Card>
          </Link>
        ))
        .slice(0, 3)}
    </S.ContentCard>
  );
}
