import { Category } from "types/article";

export const isCategory = (category: string) => {
  const categoryList = [
    "news",
    "tutorials",
    "videos",
    "php-annotated-monthly",
    "features",
    "events",
    "eap",
  ];
  return !!categoryList.includes(category);
};
