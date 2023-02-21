import { api } from "../api";
import { GET_POSTS, GET_POSTS_BY_CATEGORY } from "./queries";

export const getPostsByCategory = async (category: string) => {
  const { posts } = await api.request(GET_POSTS_BY_CATEGORY, {
    category: category,
  });

  return posts;
};
