import { getPost } from "@/service/post/getPost";
import { getPosts } from "@/service/post/getPosts";
import { GetStaticProps } from "next";

type PostProps = {
  post: {
    title: string;
    content: {
      html: string;
    };
  };
};

export default function Post({ post }: PostProps) {
  return (
    <>
      <h1>{post.title}</h1>
      <main dangerouslySetInnerHTML={{ __html: post.content.html }} />
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => {
    const category = post.category?.slug || "";
    return {
      params: { post: post.slug, category: category },
    };
  });

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const paramPost = params?.post as string;

  const post = await getPost(paramPost);

  return {
    props: {
      post,
    },
  };
};