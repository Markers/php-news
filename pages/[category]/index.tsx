import React from 'react';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import Layout from '@components/Layouts';
import { ArticleInfo, ArticleResponseALL, Category } from 'types/article';
import ArticleCard from '@components/ArticleCard';
import { getCateogryTranslation } from 'utils/category';

function Page({ articles, category }: { articles: ArticleInfo[]; category: Category }) {
  return (
    <Layout
      title={getCateogryTranslation[category]}
      summary={category}
      image="/img/1654213810643040.jpg"
      date={new Date().toISOString()}
      type={category}
    >
      <section className="container p-10 px-5 mx-auto md:py-20 md:p-10">
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {articles.map((article: ArticleInfo) => (
            <ArticleCard key={article.post_id} article={article} />
          ))}
        </section>
      </section>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { category } = query as {
    category: 'news' | 'tutorials' | 'videos' | 'php-annotated-monthly' | 'features' | 'events' | 'eap';
  };
  const categoryList = ['news', 'tutorials', 'videos', 'php-annotated-monthly', 'features', 'events', 'eap'];
  if (categoryList.includes(category) === false) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { data } = await axios.get<ArticleResponseALL>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/articles/${category}`
  );

  return {
    props: {
      articles: data.data,
      category,
      count: data.total,
      message: data.message,
    },
  };
};

export default Page;
