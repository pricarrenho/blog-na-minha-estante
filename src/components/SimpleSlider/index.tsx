import Slider from "react-slick";
import { useSimpleSlider } from "./useSimpleSlider";
import { SimpleSliderProps } from "./types";
import * as S from "./styles";

export function SimpleSlider({ item }: SimpleSliderProps) {
  const { settings, handleOnItemClick } = useSimpleSlider();

  const minifyDescription = (value: string) => {
    const maxLength = 60;

    return value.slice(0, maxLength).trim() + "...";
  };

  return (
    <S.Wrapper>
      <Slider {...settings}>
        {item?.map((post, index) => (
          <S.SliderItem key={post.title}>
            <div onClick={() => handleOnItemClick(post)}>
              <S.PhotoBook
                loading={index > 4 ? "lazy" : "eager"}
                src={post.bannerImage.url}
                alt={`Imagem banner do post ${post.title}`}
                width={300}
                height={500}
              />

              <S.TextWrapper>
                <S.Subtitle>{post.title}</S.Subtitle>

                <S.Description>
                  {minifyDescription(post.description)}
                </S.Description>
              </S.TextWrapper>
            </div>
          </S.SliderItem>
        ))}
      </Slider>
    </S.Wrapper>
  );
}
