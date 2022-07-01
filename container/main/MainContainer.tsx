import type { NextPage } from "next";
import { useContext, useEffect, useRef } from "react";
import Image from "next/image";
import { ScrollContext } from "./ScrollObserver";
import { renderCanvas } from "./renderCanvas";
import Link from "next/link";
import ArticleCard from "@components/ArticleCard";

const MainContainer: NextPage = ({ articles }: any) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { current: elContainer } = ref;
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <>
      <section className="hero bg-base-100">
        <div className="hero-content flex-col">
          <h1 className="text-6xl font-bold">PHP NEWS 한글 문서</h1>
        </div>
      </section>
      <section className="bg-base-100">
        <div className="divide-gray-200 dark:divide-gray-700">
          <h3 className="text-2xl font-merriweather font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
            최신글
          </h3>
          {/*{articles?.map((value: any) => <ArticleCard articles={articles} />)}*/}
        </div>
      </section>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
    </>
  );
};

export default MainContainer;
