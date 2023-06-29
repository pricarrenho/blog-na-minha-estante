import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { Settings } from "react-slick";

export const useSimpleSlider = () => {
  const [dragging, setDragging] = useState(false);
  const route = useRouter();

  const handleBeforeChange = useCallback(() => {
    setDragging(true);
  }, [setDragging]);

  const handleAfterChange = useCallback(() => {
    setDragging(false);
  }, [setDragging]);

  const handleOnItemClick = useCallback(
    (post: any) => {
      if (dragging) return;
      route.push(`/${post.category?.slug}/${post.slug}`);
    },
    [dragging, route]
  );

  const settings: Settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 5000, //5 seconds
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };

  return {
    settings,
    handleOnItemClick,
  };
};
