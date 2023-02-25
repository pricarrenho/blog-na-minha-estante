import { GetSubcategoriesQuery } from "@/gql/graphql";
import { getSubcategories } from "@/service/subcategories/getSubcategory";

type SubcategoriesProps = {} & GetSubcategoriesQuery;

export default function Subcategorias({ subcategories }: SubcategoriesProps) {
  return (
    <div>
      <ul>
        {subcategories?.map((subcategory) => (
          <li key={subcategory.name}>{subcategory.name}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const subcategories = await getSubcategories();

  return {
    props: {
      subcategories,
    },
  };
}
