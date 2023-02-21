import { getCategories } from "@/service/category/getCategories";
import Link from "next/link";

export default function Home({ categories }: any) {
  return (
    <main>
      <h1>Todas as categorias</h1>
      <ul>
        {categories.map((category: any) => (
          <li key={category.name}>
            <Link href={category.slug}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </main>
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
