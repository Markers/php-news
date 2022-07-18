import React from 'react';
import Image from 'next/image';
import { ArticleInfo } from 'types/article';

const ArticleCard = ({ article }: { article: ArticleInfo }) => {
  return (
    <a href={`/${article.category}/${article.post_id}`} key={article.post_id}>
      <div
        className="shadow-xl cursor-pointer card w-96 glass card-compact bg-base-100 transform duration-500 hover:-translate-y-2"
        style={{ maxWidth: '100%' }}
      >
        <figure>
          <Image src={article.thumbnail} width={article.width} height={article.height} alt={article.description} />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <Image src={article.author_avatar} width={100} height={100} alt={article.author} />
              </div>
            </div>
            <div>
              <div className="font-bold dark:text-slate-700 dark:hover:text-white-700">{article.author}</div>
              <div className="text-sm opacity-50 dark:text-slate-700 dark:hover:text-white-900">
                {article.publish_date}
              </div>
            </div>
          </div>
          <h2 className="card-title dark:text-slate-700 dark:hover:text-white-700">{article.translated_title}</h2>
          <p className="dark:text-slate-500 dark:hover:text-white-500">{article.translated_description}</p>
          <div className="justify-end card-actions">
            <span>asd</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArticleCard;
