import React from 'react';
import axios from 'axios';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from '@components/Layouts';

import { ArticleInfo, ArticleResponseALL, ArticleResponseID } from 'types/article';
import ArticleDetail from '@components/ArticleDetail';
import { checkCategory } from 'utils/validation';
import markdownToHtml, { getDocByUrl } from 'utils/markdown';

const Page = ({ type, article, content }: { type: 'markdown' | 'html'; article: ArticleInfo; content: string }) => {
  return (
    <Layout
      title={article?.translated_title}
      summary={article?.translated_description}
      image={article?.thumbnail}
      date={article?.publish_date}
      type="article"
    >
      <ArticleDetail content={content} type={type} />
    </Layout>
  );
};
// Page.getStaticProps = async ({ params }: GetStaticPropsContext) => {
export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postId = params?.postId;
  const category = params?.category?.toString();

  if (!checkCategory(category) || !postId) {
    return {
      notFound: true,
    };
  }

  const paths = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/${category}/${postId}`;

  try {
    const {
      data: { data },
    } = await axios.get<ArticleResponseID>(paths);

    const transtaionUrl = data.translated_url;
    const { content } = getDocByUrl(transtaionUrl);
    const html = await markdownToHtml(content);

    return {
      props: {
        type: 'markdown',
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

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await axios.get<ArticleResponseALL>('http://localhost:8000/api/v1/articles');
  const paths = data.data.map((post) => ({
    params: {
      category: post?.category.toString(),
      postId: post?.post_id.toString(),
    },
  }));
  return {
    paths,
    fallback: true,
  };
};

export default Page;
