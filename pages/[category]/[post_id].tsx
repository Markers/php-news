import Loading from "../../components/common/loading";
import type { ReactElement } from "react";
import { API } from "types/api";
import Layout from "../../components/layout";
import MainPage from "../../components/main-page";
import { useRequest } from "../../utils/use-request";
import type { NextPageWithLayout } from "../_app";

const Page: NextPageWithLayout = () => {
  const { data, error }: API.GET.Articles = useRequest("/articles");

  if (error) return <h1>Something went wrong!</h1>;
  if (!data) return <Loading />;

  return <div style={{ backgroundColor: "black" }}>Hi</div>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
