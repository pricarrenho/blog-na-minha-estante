import { withPageData } from "service/pageData";
import { getPostsPage, readPage } from "service/post/getPostsPage";
import { CategoryTemplate } from "templates/Category";

export default CategoryTemplate;

export const getServerSideProps = withPageData(async ({ params, query }, categories) => {
  const page = readPage(query.pagina);
  if (page === null) return { notFound: true };

  const reviews = (await categories).find(({ slug }) => slug === "resenhas");
  const subcategory = reviews?.subcategories.find(({ slug }) => slug === params?.subcategory);
  if (!reviews || !subcategory) return { notFound: true };

  const listing = await getPostsPage({
    category: { slug: reviews.slug },
    subcategories_some: { slug: subcategory.slug },
  }, page);
  if (page > listing.pageCount) return { notFound: true };

  return {
    props: {
      ...listing,
      title: subcategory.name,
      breadcrumbs: [{ label: reviews.name, href: "/resenhas" }, { label: subcategory.name }],
      path: `/resenhas/subcategorias/${subcategory.slug}`,
    },
  };
});
