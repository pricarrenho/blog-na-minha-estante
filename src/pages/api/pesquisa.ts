import type { SearchSuggestion } from "components/SearchInput/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { readSearch, searchPosts } from "service/post/searchPosts";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<SearchSuggestion[]>
) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).end();
  }

  try {
    const search = readSearch(request.query.q);
    const posts = search.length >= 2 ? await searchPosts(search, 5) : [];
    return response.status(200).json(posts.map((post) => ({
      href: `/${post.category?.slug}/${post.slug}`,
      title: post.title,
      category: post.category?.name ?? null,
    })));
  } catch {
    return response.status(503).end();
  }
}
