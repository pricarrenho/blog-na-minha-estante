import Link from "next/link";
import { useRouter } from "next/router";
import { CategoryProps } from "./types";
import * as S from "./styles";
import { Header } from "components/Header";

export function CategoryTemplate({ category }: CategoryProps) {
  const route = useRouter();

  return (
    <main>
      <Header />
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
