import axios from 'axios';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import Layout from '@components/Layouts';

import { API, ArticleInfo } from 'types/article';
import ArticleDetail from '@components/ArticleDetail';
import { checkCategory } from 'utils/validation';
import markdownToHtml, { getDocByUrl } from 'utils/markdown';

const Page = ({ article, doc, content }: { article: ArticleInfo; doc: any; content: any }) => {
  return (
    <Layout
      title={article.translated_title}
      summary={article.translated_description}
      image={article.thumbnail}
      date={article.publish_date}
      type="article"
    >
      <ArticleDetail content={content} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext) => {
  const postId = params?.postId;
  const category = params?.category?.toString();

  if (!checkCategory(category) || !postId) {
    return {
      notFound: true,
    };
  }
  const paths = `http://localhost:8000/api/v1/articles/${category}/${postId}`;

  try {
    const {
      data: { data },
    } = await axios.get<API.GET.Articles.ID>(paths);
    const transtaionUrl = data.translated_url;

    if (!transtaionUrl) {
      return {
        props: {
          article: data,
          doc: 'undefined',
          content: data.translated_content,
        },
      };
    }

    const doc = getDocByUrl(transtaionUrl);
    const content = await markdownToHtml(doc.content || '');
    return {
      props: {
        article: data,
        doc,
        content,
      },
    };
  } catch (e) {
    console.error(e);
  }

  // Page NotFound
  return {
    props: {},
    notFound: true,
  };
};

export async function getStaticPaths() {
  const { data } = await axios.get<API.GET.Articles.ALL>('http://localhost:8000/api/v1/articles');
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
}

export default Page;
