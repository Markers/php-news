import { ArticlePageProps } from "@/pages/[category]/[postId]";
import { Markdown } from "./styled";

export const ArticlePage = ({ article, content }: ArticlePageProps) => {
  return <Markdown />;
};
