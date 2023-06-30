import Link from "next/link";
import * as S from "./styles";
import { CardPostAuthorProps } from "./types";

function CardPostAuthor({ item, type }: CardPostAuthorProps) {
  return (
    <S.ContentCard>
      {item
        ?.map((post: any) => (
          <S.Card key={post.title} type={type}>
            <Link href={`/${post.category?.slug}/${post.slug}`}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt=""
                width={350}
                height={350}
              />

              <S.SubTitle type={type}>{post.title}</S.SubTitle>
            </Link>
          </S.Card>
        ))
        .slice(0, 3)}
    </S.ContentCard>
  );
}

export default CardPostAuthor;
