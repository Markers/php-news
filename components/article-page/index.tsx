import { ArticlePageProps } from "@/pages/[category]/[postId]";
import { MardkownHeader, Markdown } from "./styled";

export const ArticlePage = ({ article, content }: ArticlePageProps) => {
  console.log(article);

  return (
    <>
      <MardkownHeader className="header">
        <div className="태그"></div>
        <div className="아코디언">
          <span>Home</span>
          <span>{article.data.category}</span>
          <span>{article.data.post_id}</span>
        </div>
        <div className="제목">{article.data.translated_title}</div>
        <div className="주석">
          <span>
            {/* 작가 */} {article.data.author}
            {/* 원본 링크 */}
            {/* 공개 일정 등 */} {article.data.publish_date}
          </span>
        </div>
      </MardkownHeader>
      <Markdown dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};
