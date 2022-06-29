import axios from "axios";
import { GetServerSideProps } from "next";
import ArticleCard from "@components/ArticleCard";

function Page({ data }: any) {

  return (
    <section className="container mx-auto p-10 md:py-20 px-5 md:p-10">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
        {/*{data.map((value: any, index: any) => <ArticleCard key={value.post_id} value={value} />)}*/}
      </section>
    </section>
  );
}

// This gets called on every request
export const getServerSideProps: GetServerSideProps = async ({ req, res, locale, query  }) => {

  const data = await axios.get(`https://php-news-api.kkyungvelyy.com/api/v1/articles/${query.category}`);
  return {
    props: {
      data: data
    },
  };
};

export default Page;