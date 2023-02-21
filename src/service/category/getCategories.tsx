import { api } from "../api";
import { GET_CATEGORIES } from "./queries";
import { GetCategoriesQuery } from "@/gql/graphql";

export const getCategories = async () => {
  const { categories } = await api.request<GetCategoriesQuery>(GET_CATEGORIES);

  return categories;
};
