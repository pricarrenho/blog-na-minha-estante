import type { GetPostsQuery, PostWhereInput } from "gql/graphql";
import { cachedQuery } from "../queryCache";
import { GET_POSTS_PAGE } from "./queries";

export const postsPageSize = 9;

export function readPage(value: string | string[] | undefined) {
  if (value === undefined) return 1;
  if (typeof value !== "string" || !/^[1-9]\d*$/.test(value)) return null;

  const page = Number(value);
  return Number.isSafeInteger(page) && (page - 1) * postsPageSize <= 2_147_483_647
    ? page
    : null;
}

type PostsPageResponse = {
  postsConnection: {
    aggregate: { count: number };
    edges: { node: GetPostsQuery["posts"][number] }[];
  };
};

export async function getPostsPage(where: PostWhereInput, page: number) {
  const variables = { where, first: postsPageSize, skip: (page - 1) * postsPageSize };
  const { postsConnection } = await cachedQuery<PostsPageResponse>(GET_POSTS_PAGE, variables);

  return {
    posts: postsConnection.edges.map(({ node }) => node),
    page,
    pageCount: Math.max(1, Math.ceil(postsConnection.aggregate.count / postsPageSize)),
  };
}
