import { GetServerSideProps } from "next";

function Page() {

  return (
    <section className="container mx-auto p-10 md:py-20 px-5 md:p-10">
    </section>
  );
}

import ArticleCard from "@components/ArticleCard";


export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  return { props: {} };
};

export default Page;