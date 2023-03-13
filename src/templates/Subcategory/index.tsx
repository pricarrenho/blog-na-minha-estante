import { SubcategoriesProps } from "./types";
import * as S from "./styles";

export function SubcategoriasTemplate({ subcategories }: SubcategoriesProps) {
  return (
    <div>
      <p>Subcategories</p>
      <ul>
        {subcategories?.map((subcategory) => (
          <li key={subcategory.name}>{subcategory.name}</li>
        ))}
      </ul>
    </div>
  );
}
