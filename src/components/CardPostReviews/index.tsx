import Link from "next/link";
import * as S from "./styles";
import { CardPostReviewsProps } from "./types";

function CardPostReviews({ item, type }: CardPostReviewsProps) {
  const minifyDescription = (value: string) => {
    const maxLength = 82;

    return value.slice(0, maxLength).trim() + "...";
  };

  return (
    <S.Wrapper>
      {item
        ?.map((post: any) => (
          <S.Card key={post.title} type={type}>
            <Link href={`/${post.category?.slug}/${post.slug}`}>
              <S.PhotoBook
                src={post.bannerImage.url}
                alt=""
                width={380}
                height={238}
              />

              <S.Content>
                <S.Subtitle type={type}>{post.title}</S.Subtitle>

                <S.Description>
                  {" "}
                  {minifyDescription(post.description)}
                </S.Description>
              </S.Content>
            </Link>
          </S.Card>
        ))
        .slice(0, 3)}
    </S.Wrapper>
  );
}

export default CardPostReviews;
