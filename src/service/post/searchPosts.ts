import { getPosts, type SearchablePost } from "./getPosts";

const batchSize = 100;
const accents = new RegExp("\\p{M}", "gu");
const separators = new RegExp("[^\\p{L}\\p{N}]+", "gu");

export function readSearch(value: string | string[] | undefined) {
  return typeof value === "string" ? value.slice(0, 120).trim() : "";
}

function normalize(value: string) {
  return value.normalize("NFD").replace(accents, "").toLowerCase()
    .replace(separators, " ").trim();
}

export async function searchPosts(search: string, limit = Infinity) {
  const normalizedSearch = normalize(search);
  if (!normalizedSearch) return [];

  const terms = normalizedSearch.split(" ");
  const matches: SearchablePost[] = [];

  for (let skip = 0; ; skip += batchSize) {
    const posts = await getPosts(batchSize, skip);

    for (const post of posts) {
      if (!post.category?.slug) continue;

      const text = normalize([
        post.title,
        post.description,
        post.category.name,
        ...post.subcategories.map(({ name }) => name),
      ].join(" "));
      if (!terms.every((term) => text.includes(term))) continue;

      matches.push(post);
      if (matches.length >= limit) return matches;
    }

    if (posts.length < batchSize) return matches;
  }
}
