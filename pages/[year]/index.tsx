import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

// routes
import { routes } from "../../routes/php-annotated.routes";

// rehype-pretty-code configurations
const options = {
  theme: "github-dark",
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push("highlighted");
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ["word"];
  },
};

interface Props {
  frontMatter: any;
  mdxSource: string;
  slug: string;
}

export default function Page({ frontMatter, mdxSource, slug }: Props) {
  const [hash, setHash] = useState(frontMatter[0]);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      const hashLink = window.location.hash.replace("#", "");

      setHash(hashLink);
    });
  }, []);

  const date = new Date().getFullYear();

  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.description} />
      </Head>
    </>
  );
}

//
export const getStaticPaths = async () => {
  // year 디렉토리
  const years = fs.readdirSync(path.join("docs/kr"));

  const result = years.filter((file) => file.indexOf(".mdx") === -1);
  // year 디렉토리에서 month 파일 가져옴

  const paths = result.map((filename) => ({
    params: {
      year: filename,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

interface getStaticPropsType {
  params: {
    year: string;
  };
}

export const getStaticProps = async ({ params: { year } }: getStaticPropsType) => {
  const markdownWithMeta = fs.readFileSync(path.join(`docs/kr/${year}`, "index.mdx"));

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]],
      remarkPlugins: [remarkGfm],
    },
  });
  const slug = year;
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
