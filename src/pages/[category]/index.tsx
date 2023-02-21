import { api } from "@/service/api";
import { getCategories } from "@/service/category/getCategories";
import { getPostsByCategory } from "@/service/post/getPostsbyCategory";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Category(props: any) {
  const route = useRouter();

  return (
    <ul>
      {props.post?.map((post: any) => (
        <li key={post.slug}>
          <Link href={`${route.asPath}/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticPaths() {
  const categories: any = await getCategories();

  const paths = categories.map((category: any) => ({
    params: { category: category.slug },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const category = params?.category as string;

  const post = await getPostsByCategory(category);

  return {
    props: {
      post,
    },
  };
};
