import type { ReactElement } from "react";
import Layout from "../../components/layout";
import type { NextPageWithLayout } from "../_app";
import { fetchRequest } from "@/utils/fetch-request";
import CategoryPage from "@/components/category-page";

const Page: NextPageWithLayout = ({ data, path }: any) => {
  return <CategoryPage data={data.data} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

// TODO: 타입 추가 필요
export async function getServerSideProps({ params }: any) {
  const { data, path } = await fetchRequest(`/articles/${params.category}`);

  return {
    props: {
      data,
      path,
    },
  };
}
