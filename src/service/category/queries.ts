import { gql } from "graphql-request";

export const GET_CATEGORY = gql`
  query getCategory($category: String) {
    category(where: { slug: $category }) {
      name
      subcategories {
        name
      }
      post {
        slug
        title
      }
    }
  }
`;

export const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
      slug
    }
  }
`;
