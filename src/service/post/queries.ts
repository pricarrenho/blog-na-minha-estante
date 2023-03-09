import { gql } from "graphql-request";

export const GET_POST = gql`
  query getPost($post: String) {
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
      bannerImage {
        url
      }
    }
  }
`;

export const GET_POSTS = gql`
  query getPosts {
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
  query getPostsByCategory($category: String) {
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
