export type Category =
  | "news"
  | "tutorials"
  | "videos"
  | "php-annotated-monthly"
  | "features"
  | "events"
  | "eap";

export interface Categoris {
  [key: string]: Category;
  // [key: string]: Category;
}
