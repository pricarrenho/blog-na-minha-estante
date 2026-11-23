import { withPageData } from "service/pageData";
import { postsPageSize, readPage } from "service/post/getPostsPage";
import { readSearch, searchPosts } from "service/post/searchPosts";
import { CategoryTemplate } from "templates/Category";

export default CategoryTemplate;

export const getServerSideProps = withPageData(async ({ query }) => {
  const search = readSearch(query.q);
  const page = readPage(query.pagina);
  if (page === null) return { notFound: true };

  const results = await searchPosts(search);
  const pageCount = Math.max(1, Math.ceil(results.length / postsPageSize));
  if (page > pageCount) return { notFound: true };

  const start = (page - 1) * postsPageSize;

  return {
    props: {
      posts: results.slice(start, start + postsPageSize),
      page,
      pageCount,
      title: "Pesquisa",
      breadcrumbs: [{ label: "Pesquisa" }],
      path: "/pesquisa",
      search,
    },
  };
});
