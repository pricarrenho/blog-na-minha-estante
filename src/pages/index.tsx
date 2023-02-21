import { getCategories } from "@/service/category/getCategories";
import Link from "next/link";

export default function Home({ categories }: any) {
  return (
    <ul>
      {categories.map((category: any) => (
        <li key={category.name}>
          <Link href={category.slug}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      categories,
    },
  };
}
