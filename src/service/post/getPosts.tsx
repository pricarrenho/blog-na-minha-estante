import { api } from "../api";
import { GET_POSTS } from "./queries";

export const getPosts = async () => {
  const { posts } = await api.request(GET_POSTS);

  return posts;
};
