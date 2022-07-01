import { Article } from "types/article";

const ArticleDetail = ({ article }: { article: Article }) => {
  return (
    <article>
      <div dangerouslySetInnerHTML={{ __html: article.translated_content }}></div>
    </article>
  );
};
export default ArticleDetail;
