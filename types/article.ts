export interface ArticleInfo {
  post_id: string;
  href: string;
  thumbnail: string;
  width: string;
  height: string;
  sizes: string;
  title: string;
  description: string;
  publish_date: string;
  author: string;
  author_avatar: string;
  content: string;
  tags: string;
  category: Category | string;
  slug: string;
  translated_url: string;
  translated_title: string;
  translated_description: string;
  translated_content: string;
  is_translation: string;
}

export type Category = 'news' | 'tutorials' | 'videos' | 'php-annotated-monthly' | 'features' | 'events' | 'eap';

export interface ArticleResponseID {
  data: ArticleInfo;
  item: string;
  message: string;
  total: number;
}

export interface ArticleResponseALL {
  data: ArticleInfo[];
  item: string;
  message: string;
  total: number;
}

// export namespace Article {
//   export type ID = {
//     data: ArticleInfo;
//   };

//   interface ALL {
//     data: ArticleInfo[];
//     item: string;
//     message: string;
//     total: number;
//   }
// }
// declare namespace API {
//   export namespace GET {
//     export namespace Articles {
//       export type ID = {
//         data: ArticleInfo;
//         item: string;
//         message: string;
//         total: number;
//       };

//       export type ALL = {};
//     }
//   }
// }
