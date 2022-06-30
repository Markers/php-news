import axios from "axios";
import { GetServerSideProps } from "next";

function Page() {

  return <></>;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data } = await axios.get(`https://php-news-api.kkyungvelyy.com/api/v1/articles/post/${query.post_id}`);

  return {
    redirect: {
      permanent: false,
      destination: `/${data.data.category}/${data.data.post_id}/${data.data.slug}`,
    },
    props: {},
  };
};

export default Page;
