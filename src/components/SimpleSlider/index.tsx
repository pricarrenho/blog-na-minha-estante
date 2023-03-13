import Slider from "react-slick";
import { getPosts } from "service/post/getPosts";
import useSWR from "swr";
import * as S from "./styles";

function SimpleSlider() {
  const { data } = useSWR("/api/posts", getPosts);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data
        ?.map((post) => (
          <S.Photo
            src={post.bannerImage.url}
            alt=""
            key={post.title}
            width={400}
            height={500}
          />
        ))
        .slice(0, 3)}
    </Slider>
  );
}

export default SimpleSlider;
