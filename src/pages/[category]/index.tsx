import { withPageData } from "service/pageData";
import { getPostsPage, readPage } from "service/post/getPostsPage";
import { CategoryTemplate } from "templates/Category";

export default CategoryTemplate;

export const getServerSideProps = withPageData(async ({ params, query }, categories) => {
  const page = readPage(query.pagina);
  if (page === null) return { notFound: true };

  const category = (await categories).find(({ slug }) => slug === params?.category);
  if (!category) return { notFound: true };

  const listing = await getPostsPage({ category: { slug: category.slug } }, page);
  if (page > listing.pageCount) return { notFound: true };

  return {
    props: {
      ...listing,
      title: category.name,
      description: category.description ?? null,
      breadcrumbs: [{ label: category.name }],
      path: `/${category.slug}`,
    },
  };
});
