import { getCategories } from "service/category/getCategories";
import { HomeTemplate } from "templates/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
