export type Post = {
  slug: string;
  title: string;
  description: string;
  category?: { name?: string | null; slug?: string | null } | null;
  bannerImage: {
    url: string;
  };
};

export type SimpleSliderProps = {
  item?: Post[];
};
