import { Article } from "types/article";

const ArticleDetail = ({ article }: { article: Article }) => {
  console.log(article);

  return (
    <article className="article-section">
      <div dangerouslySetInnerHTML={{ __html: article.translated_content }}></div>
    </article>
  );
};
export default ArticleDetail;
