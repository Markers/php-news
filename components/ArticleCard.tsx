import React from 'react';
import Image from 'next/image';
import { ArticleInfo } from 'types/article';
import { Avatar } from '@styles/styled-components/avatar';
import { CardDescription, CardTagsItem, CardTitle } from '@styles/styled-components/article';

const ArticleCard = ({ article }: { article: ArticleInfo }) => {
  const a = ['a', 'b', 'c'];
  return (
    <div
      className="shadow-xl cursor-pointer card w-96 glass card-compact bg-base-100 transform duration-500 hover:-translate-y-2"
      style={{
        maxWidth: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <a href={`/${article.category}/${article.post_id}`} key={article.post_id}>
        <div className="card">
          <Image src={article.thumbnail} width={article.width} height={article.height} alt={article.description} />
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="w-12 h-12 mask mask-squircle">
                <Avatar src={article.author_avatar} width={100} height={100} alt={article.author} />
              </div>
            </div>
            <div>
              <div className="font-bold dark:text-slate-700 dark:hover:text-white-700">{article.author}</div>
              <div className="text-sm opacity-50 dark:text-slate-700 dark:hover:text-white-900">
                {article.publish_date}
              </div>
            </div>
          </div>
          <CardTitle>{article.translated_title}</CardTitle>
          <CardDescription>{article.translated_description}</CardDescription>
        </div>
      </a>
      <div className="tag">
        <CardTagsItem>
          {a.map((element) => (
            <span key={element}>{element}</span>
          ))}
        </CardTagsItem>
      </div>
    </div>
  );
};

export default ArticleCard;
