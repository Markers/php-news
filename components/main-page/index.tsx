import { Article } from "types/article";
import _ from "lodash";

import { MainPageWrapper } from "./styled";
import ArticleCard from "../common/card";

function MainPage({ data }: { data: Article[] }) {
  const articles = data.filter((article) => article.post_id);
  const filtterArticle = _.take(_.uniqBy(articles, "post_id"), 70);

  return (
    <MainPageWrapper>
      <article>
        <h1>Main Page</h1>
        <div className="articles">
          {filtterArticle.map((article) => (
            <ArticleCard key={article.post_id} article={article} />
          ))}
        </div>
      </article>
    </MainPageWrapper>
  );
}

export default MainPage;
