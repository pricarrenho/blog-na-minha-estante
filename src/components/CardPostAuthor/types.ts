export type CardPostAuthorProps = {
  item?: {
    slug: string;
    title: string;
    description: string;
    category?: { name?: string | null; slug?: string | null } | null;
    bannerImage: {
      url: string;
    };
  }[];
  type: "primary" | "secondary";
};
