import type { GetServerSideProps, NextPage } from "next";
import MainContainer from "../container/main/MainContainer";
import axios from "axios";

// 어떻게 할지 고민 중
const Home: NextPage = ({ articles }: any) => {
  console.log(articles);
  return <MainContainer articles={articles}/>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { data } = await axios.get("https://php-news-api.kkyungvelyy.com/api/v1/articles");
  return {
    props: { articles: data }, // will be passed to the page component as props
  };
};

export default Home;