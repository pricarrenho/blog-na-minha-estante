export type CardPostsCategoriesProps = {
  items?: {
    slug: string;
    title: string;
    description: string;
    category?: { name?: string | null; slug?: string | null } | null;
    bannerImage: {
      url: string;
    };
  }[];
};
