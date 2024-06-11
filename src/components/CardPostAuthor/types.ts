export type CardPostAuthorProps = {
  item?: {
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
  type: "primary" | "secondary";
};
