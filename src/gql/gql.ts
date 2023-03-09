/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getCategory($category: String) {\n    category(where: { slug: $category }) {\n      name\n      subcategories {\n        name\n      }\n      post {\n        slug\n        title\n      }\n    }\n  }\n": types.GetCategoryDocument,
    "\n  query getCategories {\n    categories {\n      id\n      name\n      slug\n    }\n  }\n": types.GetCategoriesDocument,
    "\n  query getPost($post: String) {\n    post(where: { slug: $post }) {\n      title\n      slug\n      category {\n        name\n        slug\n      }\n      content {\n        html\n      }\n      bannerImage {\n        url\n      }\n    }\n  }\n": types.GetPostDocument,
    "\n  query getPosts {\n    posts {\n      slug\n      title\n      category {\n        name\n        slug\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query getPostsByCategory($category: String) {\n    posts(where: { category: { slug: $category } }) {\n      slug\n      title\n      category {\n        name\n        slug\n      }\n    }\n  }\n": types.GetPostsByCategoryDocument,
    "\n  query getSubcategories {\n    subcategories {\n      name\n      category {\n        name\n        slug\n      }\n      posts {\n        title\n      }\n    }\n  }\n": types.GetSubcategoriesDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCategory($category: String) {\n    category(where: { slug: $category }) {\n      name\n      subcategories {\n        name\n      }\n      post {\n        slug\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query getCategory($category: String) {\n    category(where: { slug: $category }) {\n      name\n      subcategories {\n        name\n      }\n      post {\n        slug\n        title\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getCategories {\n    categories {\n      id\n      name\n      slug\n    }\n  }\n"): (typeof documents)["\n  query getCategories {\n    categories {\n      id\n      name\n      slug\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPost($post: String) {\n    post(where: { slug: $post }) {\n      title\n      slug\n      category {\n        name\n        slug\n      }\n      content {\n        html\n      }\n      bannerImage {\n        url\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPost($post: String) {\n    post(where: { slug: $post }) {\n      title\n      slug\n      category {\n        name\n        slug\n      }\n      content {\n        html\n      }\n      bannerImage {\n        url\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPosts {\n    posts {\n      slug\n      title\n      category {\n        name\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPosts {\n    posts {\n      slug\n      title\n      category {\n        name\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPostsByCategory($category: String) {\n    posts(where: { category: { slug: $category } }) {\n      slug\n      title\n      category {\n        name\n        slug\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPostsByCategory($category: String) {\n    posts(where: { category: { slug: $category } }) {\n      slug\n      title\n      category {\n        name\n        slug\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getSubcategories {\n    subcategories {\n      name\n      category {\n        name\n        slug\n      }\n      posts {\n        title\n      }\n    }\n  }\n"): (typeof documents)["\n  query getSubcategories {\n    subcategories {\n      name\n      category {\n        name\n        slug\n      }\n      posts {\n        title\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;