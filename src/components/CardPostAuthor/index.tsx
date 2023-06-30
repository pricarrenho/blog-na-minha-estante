import Link from "next/link";
import * as S from "./styles";
import { CardPostAuthorProps } from "./types";

function CardPostAuthor({ item, type }: CardPostAuthorProps) {
  return (
    <S.ContentCard>
      {item
        ?.map((post: any) => (
          <Link href={`/${post.category?.slug}/${post.slug}`} key={post.title}>
            <S.Card type={type}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt=""
                width={350}
                height={350}
              />

              <S.SubTitle type={type}>{post.title}</S.SubTitle>
            </S.Card>
          </Link>
        ))
        .slice(0, 3)}
    </S.ContentCard>
  );
}

export default CardPostAuthor;
