import { GetCategoryQuery } from "@/gql/graphql";
import { getCategories } from "@/service/category/getCategories";
import { getCategory } from "@/service/category/getCategory";
import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

type CategoryProps = {} & GetCategoryQuery;

export default function Category({ category }: CategoryProps) {
  const route = useRouter();

  return (
    <main>
      <h1>Post da categoria</h1>
      <ul>
        {category?.post?.map((post) => (
          <li key={post.slug}>
            <Link href={`${route.asPath}/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
      <h2>Subcategorias</h2>
      <ul>
        {category?.subcategories.map((subcategory) => (
          <li key={subcategory.name}>{subcategory.name}</li>
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
  const categorySlug = params?.category as string;

  const category = await getCategory(categorySlug);

  return {
    props: {
      category,
    },
  };
};
