import { GetCategoriesQuery } from "gql/graphql";
import { cachedQuery } from "../queryCache";
import { GET_CATEGORIES } from "./queries";

export type NavigationCategory = GetCategoriesQuery["categories"][number] & {
  description?: string | null;
  subcategories: { name: string; slug: string }[];
};

export const getCategories = async () => {
  const { categories } = await cachedQuery<{ categories: NavigationCategory[] }>(GET_CATEGORIES);

  return categories;
};
