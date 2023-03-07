import Link from "next/link";
import { getCategories } from "service/category/getCategories";
import { HomeTemplate } from "templates/Home";

export default function Home({ categories }: any) {
  return <HomeTemplate categories={categories} />;
}

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    revalidate: 60,
    props: {
      categories,
    },
  };
}
