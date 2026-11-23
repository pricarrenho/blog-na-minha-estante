import { HomeTemplate } from "templates/Home";
import { withPageData } from "service/pageData";
import { getPosts } from "service/post/getPosts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return <HomeTemplate />;
}

export const getServerSideProps = withPageData(async () => ({
  props: { fallback: { "/api/posts": await getPosts() } },
}));
