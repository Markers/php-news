import React from 'react';
const ArticleDetail = ({ content }: { content: string }) => {
  return (
    <article className="article-section">
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};
export default ArticleDetail;
