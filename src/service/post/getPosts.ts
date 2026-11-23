import { GetPostsQuery } from "gql/graphql";
import { cachedQuery } from "../queryCache";
import { GET_POSTS } from "./queries";

export type SearchablePost = GetPostsQuery["posts"][number] & {
  subcategories: { name: string }[];
};

export const getPosts = async (first = 100, skip = 0) => {
  const { posts } = await cachedQuery<{ posts: SearchablePost[] }>(GET_POSTS, { first, skip });

  return posts;
};
