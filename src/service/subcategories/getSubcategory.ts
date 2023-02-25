import { GetSubcategoriesQuery } from "@/gql/graphql";
import { api } from "../api";
import { GET_SUBCATEGORIES } from "./queries";

export const getSubcategories = async () => {
  const { subcategories } = await api.request<GetSubcategoriesQuery>(
    GET_SUBCATEGORIES
  );

  return subcategories;
};
