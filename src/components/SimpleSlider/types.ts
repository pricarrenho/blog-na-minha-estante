export type Post = {
  slug: string;
  title: string;
  description: string;
  category: {
    name: string;
    slug: string;
  };
  bannerImage: {
    url: string;
  };
};

export type SimpleSliderProps = {
  item?: Post[];
};
