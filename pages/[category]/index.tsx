import axios from "axios";
import { GetServerSideProps } from "next";
import ArticleCard from "@components/ArticleCard";
import withGetServerSideProps from "lib/utils/withServerSideProps";
import Layout from "@components/Layouts";

function Page({ data, category }: any) {
  return (
    <Layout
      title={category}
      summary={category}
      image="/img/1654213810643040.jpg"
      date={new Date().toISOString()}
      type={category}
    >
      <section className="container mx-auto p-10 md:py-20 px-5 md:p-10">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
          {data.map((value: any, index: any) => <ArticleCard key={value.post_id} value={value} />)}
        </section>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async ({ query }) => {
    const { category }: { category: string; } = query as any;
    const categoryList = ["news", "tutorials", "videos", "php-annotated-monthly", "features", "events", "eap"];
    if (categoryList.includes(category) === false) {
      return {
        notFound: true,
      };
    }

    const { data } = await axios.get(`https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}`);
    return {
      props: {
        data: data.data,
        category: category,
      },
    };

  },
);

export default Page;
