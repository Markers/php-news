import type { NextPage } from "next";

import homeStyles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <section className={homeStyles.grid}>모던퍼그</section>
      <section className={homeStyles.grid}>최신글 관련</section>
      <section className={homeStyles.grid}>커뮤니티 공간</section>
    </>
  );
};

export default Home;
