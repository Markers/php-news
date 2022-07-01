export interface Article {
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

export type Category = {
  category:
    | "news"
    | "tutorials"
    | "videos"
    | "php-annotated-monthly"
    | "features"
    | "events"
    | "eap";
};
