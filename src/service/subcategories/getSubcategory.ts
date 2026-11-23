import { GetSubcategoriesQuery } from "gql/graphql";
import { cachedQuery } from "../queryCache";
import { GET_SUBCATEGORIES } from "./queries";

export const getSubcategories = async () => {
  const { subcategories } = await cachedQuery<GetSubcategoriesQuery>(
    GET_SUBCATEGORIES
  );

  return subcategories;
};
