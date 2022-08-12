export const categoryList = [
  "news",
  "tutorials",
  "videos",
  "php-annotated-monthly",
  "features",
  "events",
  "eap",
];

export const hasCategory = (category?: string) => {
  if (!category) {
    return false;
  }
  return !!categoryList.includes(category);
};
