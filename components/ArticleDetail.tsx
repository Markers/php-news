import React from 'react';
const ArticleDetail = ({ content, type }: { content: string; type: 'markdown' | 'html' }) => {
  return (
    <article className="article-section">
      <span>{type}</span>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </article>
  );
};
export default ArticleDetail;
