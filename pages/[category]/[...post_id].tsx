import axios from "axios";
import { GetServerSideProps } from "next";

function Page({ data }) {

  return <></>;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
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
    console.log(e);
  }
  return {
    notFound: true,
  };
};

export default Page;
