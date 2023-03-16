import Link from "next/link";
import Slider, { Settings } from "react-slick";
import * as S from "./styles";

function SimpleSlider({ item }: any) {
  const settings: Settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, //5 seconds
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {item
          ?.map((post: any) => (
            <S.SliderItem key={post.title}>
              <Link href={`/${post.category?.slug}/${post.slug}`}>
                <S.PhotoBook
                  src={post.bannerImage.url}
                  alt=""
                  width={300}
                  height={500}
                />

                <S.TextWrapper>
                  <S.Subtitle>{post.title}</S.Subtitle>

                  <S.Description>{post.description}</S.Description>
                </S.TextWrapper>
              </Link>
            </S.SliderItem>
          ))
          .slice(0, 3)}
      </Slider>
    </S.Wrapper>
  );
}

export default SimpleSlider;
