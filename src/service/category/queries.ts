import { gql } from "graphql-request";

export const GET_CATEGORY = gql`
  query Category($category: String) {
    category(where: { slug: $category }) {
      id
    }
  }
`;

export const GET_CATEGORIES = gql`
  query Categories {
    categories {
      id
      name
      slug
    }
  }
`;
