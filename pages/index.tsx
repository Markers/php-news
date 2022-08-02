import type { ReactElement } from "react";
import Layout from "../components/layout";
import MainPage from "../components/main-page";
import { useRequest } from "../utils/use-request";
import type { NextPageWithLayout } from "./_app";

const Page: NextPageWithLayout = () => {
  const { data, error } = useRequest("/articles");

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <h1>Loading...</h1>;

  return <MainPage data={data} />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
