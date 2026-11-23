import { gql } from "graphql-request";

export const GET_POST = gql`
  query getPost($post: String) {
    post(where: { slug: $post }) {
      title
      slug
      description
      category {
        name
        slug
      }
      subcategories(first: 100, orderBy: name_ASC) {
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
  query getPosts($first: Int!, $skip: Int!) {
    posts(first: $first, skip: $skip, orderBy: publishedAt_DESC) {
      slug
      title
      category {
        name
        slug
      }
      subcategories {
        name
      }
      bannerImage {
        url
      }
      description
    }
  }
`;

export const GET_POSTS_PAGE = gql`
  query getPostsPage($where: PostWhereInput!, $first: Int!, $skip: Int!) {
    postsConnection(where: $where, first: $first, skip: $skip, orderBy: publishedAt_DESC) {
      aggregate {
        count
      }
      edges {
        node {
          slug
          title
          category {
            name
            slug
          }
          bannerImage {
            url
          }
          description
        }
      }
    }
  }
`;
