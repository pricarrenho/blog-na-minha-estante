import { GetCategoriesQuery } from "gql/graphql";
import Link from "next/link";
import * as S from "./styles";

export function HomeTemplate({ categories }: GetCategoriesQuery) {
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
