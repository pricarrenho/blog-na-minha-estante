import { gql } from "graphql-request";

export const GET_POST = gql`
  query Post($post: String) {
    post(where: { slug: $post }) {
      title
      slug
      category {
        name
        slug
      }
      content {
        html
      }
    }
  }
`;

export const GET_POSTS = gql`
  query Posts {
    posts {
      slug
      title
      category {
        name
        slug
      }
    }
  }
`;

export const GET_POSTS_BY_CATEGORY = gql`
  query Posts($category: String) {
    posts(where: { category: { slug: $category } }) {
      slug
      title
      category {
        name
        slug
      }
    }
  }
`;
