import { GetPostQuery } from "gql/graphql";
import { cachedQuery } from "../queryCache";
import { GET_POST } from "./queries";

export type BlogPost = NonNullable<GetPostQuery["post"]> & {
  subcategories: { name: string; slug: string }[];
};

export const getPost = async (postSlug: string) => {
  const { post } = await cachedQuery<{ post: BlogPost | null }>(GET_POST, {
    post: postSlug,
  });

  return post;
};
