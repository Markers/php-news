import { useContext, useRef } from 'react';
import ArticleCard from '@components/ArticleCard';
import { ScrollContext } from 'utils/scoll/scroll-observer';
import { ArticleInfo } from 'types/article';

const Landing = ({ articles }: { articles: ArticleInfo[] }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { current: elContainer } = ref;
  const { scrollY } = useContext(ScrollContext);
  let progress = 0;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <>
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas"></canvas>
      <section className="container mx-auto p-10 md:py-20 px-5 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {articles?.map((article: ArticleInfo, index: number) => {
            if (index > 7) return false;
            return <ArticleCard key={article.post_id} article={article} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Landing;
