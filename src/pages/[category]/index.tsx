import { api } from "@/service/api";
import { getCategories } from "@/service/category/getCategories";
import { getPostsByCategory } from "@/service/post/getPostsbyCategory";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

type Post = {
  slug: string;
  title: string;
};

type CategoryProps = {
  posts: Post[];
};

export default function Category({ posts }: CategoryProps) {
  const route = useRouter();

  return (
    <main>
      <h1>Post da categoria</h1>
      <ul>
        {posts?.map((post) => (
          <li key={post.slug}>
            <Link href={`${route.asPath}/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map((category) => ({
    params: { category: category.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;

  const posts = await getPostsByCategory(category);

  return {
    props: {
      posts,
    },
  };
};
