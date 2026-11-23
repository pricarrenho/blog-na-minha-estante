import { optionalPageData, withPageData } from "service/pageData";
import { getPost } from "service/post/getPost";
import { getPosts } from "service/post/getPosts";
import { PostTemplate } from "templates/Post";

export default PostTemplate;

export const getServerSideProps = withPageData(async ({ params }) => {
  if (typeof params?.post !== "string") return { notFound: true };

  const postRequest = getPost(params.post);
  const recommendations = getPosts(3).catch(() => null);
  const post = await postRequest;
  if (!post || post.category?.slug !== params.category) return { notFound: true };

  return {
    props: { post, recommendations: (await optionalPageData(recommendations)) ?? [] },
  };
});
