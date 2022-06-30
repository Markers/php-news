import type { GetServerSideProps, NextPage } from "next";
import MainContainer from "../container/main/MainContainer";
import axios from "axios";
import Layout from "@components/Layouts";

// 어떻게 할지 고민 중
const Home: NextPage = ({ articles }: any) => {

  return (
    <Layout
      title={`로컬메인`}
      summary={"설명"}
      image={"/img/1654213810643040.jpg"}
      date={new Date().toISOString()}
      type="article"
    >
      <MainContainer articles={articles} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("https://php-news-api.kkyungvelyy.com/api/v1/articles");
  return {
    props: { articles: data }, // will be passed to the page component as props
  };
};

export default Home;