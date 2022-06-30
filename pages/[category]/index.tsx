import axios from "axios";
import { GetServerSideProps } from "next";
import ArticleCard from "@components/ArticleCard";
import withGetServerSideProps from "utils/withServerSideProps";

function Page({ data }: any) {
  return (
    <section className="container mx-auto p-10 md:py-20 px-5 md:p-10">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {data.map((value: any, index: any) => <ArticleCard key={value.post_id} value={value} />)}
      </section>
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = withGetServerSideProps(
  async ({ query }) => {
    const { category }: { category: string; } = query as any;
    const categoryList = ["news", "tutorials", "videos", "php-annotated-monthly", "features", "events", "eap"]
    if (categoryList.includes(category) === false) {
      return {
        notFound : true    
      }
    }

    const { data } = await axios.get(`https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}`);
    return {
      props: {
        data: data.data
      },
    };

  },
)

export default Page;
