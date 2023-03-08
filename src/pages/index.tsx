import { getCategories } from "service/category/getCategories";
import { HomeTemplate } from "templates/Home";

export default function Home() {
  return <HomeTemplate />;
}

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    revalidate: 60,
    props: {
      fallback: {
        "/api/categories": categories,
      },
    },
  };
}
