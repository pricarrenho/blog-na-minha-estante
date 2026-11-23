import type { GetPostsQuery } from "gql/graphql";
import type { BlogPost } from "service/post/getPost";

export type PostTemplateProps = {
  post: BlogPost;
  recommendations: GetPostsQuery["posts"];
};
