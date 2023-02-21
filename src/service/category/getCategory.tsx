import { gql } from "graphql-request";
import { api } from "../api";
import { GET_CATEGORY } from "./queries";

export const getCategory = async () => {
  const { categories } = await api.request(GET_CATEGORY);

  return categories;
};
