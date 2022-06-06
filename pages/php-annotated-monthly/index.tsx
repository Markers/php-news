import { GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import { getStaticPropsType } from "../../types/dataFetchType";
export default function Page() {
  return (
    <>
      <span>PHP Annotated Monthly</span>
    </>
  );
}

export const getServerSideProps = async () => {

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { year, month, slug } }: getStaticPropsType) => {
  console.log("getStaticProps", year, month, slug);

  const markdownWithMeta = fs.readFileSync(
    path.join(`docs/php-annotated-monthly/kr`, slug + ".mdx"),
  );
  console.log(markdownWithMeta);

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const [mdxSource] = await Promise.all([serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]],
      remarkPlugins: [remarkGfm],
    },
  })]);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
