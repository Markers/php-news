import axios from "axios";
import { GetServerSideProps } from "next";
import Layout from "@components/Layouts";

function Page({ data }: any) {

  return (
    <Layout
      title={`로컬메인`}
      summary={"설명"}
      image={"/img/1654213810643040.jpg"}
      date={new Date().toISOString()}
      type="article"
    >
      <span>asd</span>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const { category, post_id } = query;
  const path = `https://php-news-api.kkyungvelyy.com/api/v1/articles/${category}/${post_id}`;
  try {
    const { data } = await axios.get(path);
    if (data) {
      return {
        props: { data },
      };
    }
  } catch (e) {
  }
  return {
    props: {},
    notFound: true,
  };
};

export default Page;
