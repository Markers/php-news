import axios from "axios";
import { GetServerSideProps } from "next";
import Layout from "@components/Layouts";
import withGetServerSideProps from "@lib/utils/withServerSideProps";
import { isCategory } from "@lib/utils/isCategory";
import { Article } from "types/article";
import ArticleDetail from "@components/ArticleDetail";

const Page = ({ article }: { article: Article }) => {
  return (
    <Layout
      title={article.translated_title}
      summary={article.translated_description}
      image={article.thumbnail}
      date={article.publish_date}
      type="article"
    >
      <ArticleDetail article={article} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(async ({ query }) => {
  const post_id = query.post_id as unknown as number;
  const category = query.category as string;

  if (!isCategory(category) || !post_id) {
    return {
      notFound: true,
    };
  }

  // const path = `https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}/${post_id}`;
  const path = `http://localhost:8000/api/v1/articles/${category}/${post_id}`;

  try {
    const { data } = await axios.get(path);
    if (data) {
      return {
        props: { article: data.data },
      };
    }
  } catch (e) {}
  return {
    props: {},
    notFound: true,
  };
});

export default Page;
