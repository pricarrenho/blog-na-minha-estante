export type CardPostsCategoriesProps = {
  items?: {
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
  }[];
};
