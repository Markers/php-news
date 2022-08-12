import Loading from "../../components/common/loading";
import type { ReactElement } from "react";
import { API } from "types/api";
import Layout from "../../components/layout";
import { useRequest } from "../../utils/use-request";
import type { NextPageWithLayout } from "../_app";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { getDocByUrl } from "@/utils/markdown/get-docs-by-url";
import markdownToHtml from "@/utils/markdown/markdown-to-html";
import { fetchRequest } from "@/utils/fetch-request";
import { Article } from "types/article";
import { ArticlePage } from "@/components/article-page";

export interface ArticlePageProps {
  article: {
    data: Article;
  };
  content: string;
  type?: "markdown" | "html";
}

const Page: NextPageWithLayout = (data) => {
  const { article, content, type } = data as ArticlePageProps;
  if (type === "markdown") {
    return <ArticlePage article={article} content={content} />;
  }
  return <></>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const postId = params?.postId;
  const category = params?.category?.toString();

  try {
    const { data } = await fetchRequest(`/articles/${category}/${postId}`);
    const transtaionUrl = data.data.translated_url;
    const { content } = getDocByUrl(transtaionUrl);
    const html = await markdownToHtml(content);

    return {
      props: {
        type: "markdown",
        article: data,
        content: html,
      },
    };
  } catch (e) {
    console.error(e);
  }

  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async ({ params }: any) => {
  const { data } = await fetchRequest(`/articles`);
  const paths = data.data.map((post: Article) => ({
    params: {
      category: post?.category.toString(),
      postId: post?.post_id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};
