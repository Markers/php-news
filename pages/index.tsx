import type { NextPage } from "next";

import homeStyles from "./index.module.scss";

const Home: NextPage = () => {
  return <section className={homeStyles.grid}></section>;
};

export default Home;
