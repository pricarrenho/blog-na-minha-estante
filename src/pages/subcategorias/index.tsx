import { getSubcategories } from "service/subcategories/getSubcategory";
import { SubcategoriasTemplate } from "templates/Subcategory";
import { SubcategoriesProps } from "templates/Subcategory/types";

export default function Subcategorias({ subcategories }: SubcategoriesProps) {
  return <SubcategoriasTemplate subcategories={subcategories} />;
}

export async function getStaticProps() {
  const subcategories = await getSubcategories();

  return {
    props: {
      subcategories,
    },
  };
}
