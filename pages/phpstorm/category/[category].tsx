import type { ReactElement } from "react";
import CategoryPage from "@/components/category-page";
import { NextPageWithLayout } from "@/pages/_app";
import Layout from "@/components/layout";

const Page: NextPageWithLayout = ({ data }: any) => {
  return <CategoryPage data={data.data} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

// TODO: 타입 추가 필요
export async function getServerSideProps({ query }: any) {
  return {
    redirect: {
      permanent: false,
      destination: `/${query.category}`,
    },
    props: {},
  };
}
