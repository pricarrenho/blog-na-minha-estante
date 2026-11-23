import type { GetPostsQuery } from "gql/graphql";
import type { BreadcrumbItem } from "components/Breadcrumb";

export type CategoryProps = {
  title: string;
  description?: string | null;
  breadcrumbs?: BreadcrumbItem[];
  posts: GetPostsQuery["posts"];
  page: number;
  pageCount: number;
  path: string;
  search?: string;
};
