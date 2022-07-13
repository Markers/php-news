import Landing from '@components/landing';
import Layout from '@components/Layouts';
import type { GetServerSideProps, NextPage } from 'next';
import axios from 'axios';

const Home: NextPage = ({ data }: any) => {
  return (
    <Layout
      title={`로컬메인`}
      summary={'설명'}
      image={'/img/1654213810643040.jpg'}
      date={new Date().toISOString()}
      type="article"
    >
      <Landing articles={data} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const {
      data: { data },
    } = await axios.get(`http://localhost:8000/api/v1/articles`);
    // 데이터 용량으로 8개만 리턴함
    return {
      props: { data: data.slice(1, 8) },
    };
  } catch (error) {
    console.error('error', error);
  }
  return {
    props: {},
  };
};

export default Home;
