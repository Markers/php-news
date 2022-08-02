import { Category } from "./category";

export interface Article {
  author: string;
  author_avatar: string;
  category: Category;
  description: string;
  height: number;
  href: string;
  is_translation: number;
  post_id: number;
  publish_date: string;
  sizes: string;
  slug: string;
  tags: null;
  thumbnail: string;
  title: string;
  translated_description: string;
  translated_thumbnail: string;
  translated_title: string;
  translated_url: string;
  width: number;
}
