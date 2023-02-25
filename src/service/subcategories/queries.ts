import { gql } from "graphql-request";

export const GET_SUBCATEGORIES = gql`
  query getSubcategories {
    subcategories {
      name
      category {
        name
        slug
      }
      posts {
        title
      }
    }
  }
`;
