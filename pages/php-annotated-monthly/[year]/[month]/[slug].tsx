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

// page components
// import MainNavbar from "pagesComponents/Navbar";
// import ComponentCard from "pagesComponents/Cards/ComponentCard";
// import Code from "pagesComponents/Code";
// import Pre from "pagesComponents/Pre";
// import CodeSandbox from "pagesComponents/CodeSandbox";
// import StackBlitz from "pagesComponents/StackBlitz";

// components
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Alert,
//   Avatar,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Checkbox,
//   Chip,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   IconButton,
//   Input,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Navbar,
//   Option,
//   Popover,
//   PopoverHandler,
//   PopoverContent,
//   Progress,
//   Radio,
//   Select,
//   Switch,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Textarea,
//   Tooltip,
//   Typography,
// } from "../../../src";

// routes
import { routes } from "../../../../routes/php-annotated.routes";

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

// const components = {
//   h1: (props: any) => (
//     <Typography
//       as="h1"
//       variant="h3"
//       color="blue-grey"
//       className="!font-sans !mb-4 lg:!text-4xl"
//       {...props}
//     />
//   ),
//   h2: (props: any) => (
//     <Typography as="h2" variant="h4" color="blue-grey" className="!font-sans !mb-2" {...props} />
//   ),
//   h3: (props: any) => (
//     <Typography as="h3" variant="h5" color="blue-grey" className="!font-sans !mb-2" {...props} />
//   ),
//   h6: (props: any) => (
//     <Typography
//       as="p"
//       variant="h5"
//       className="!text-blue-grey-500 !font-normal !mb-12"
//       {...props}
//     />
//   ),
//   p: (props: any) => <Typography className="!text-blue-grey-500 !font-normal !mb-4" {...props} />,
//   hr: () => <hr className="!mt-24 !mb-20 !border-blue-grey-50" />,
//   a: (props: any) => (
//     <a
//       className="!font-sans !font-medium !text-blue-grey-900 hover:!text-blue-500 !transition-colors"
//       {...props}
//     />
//   ),
//   table: (props: any) => (
//     <div className="!overflow-scroll">
//       <table className="!min-w-[700px] lg:!min-w-full !w-full" {...props} />
//     </div>
//   ),
//   thead: (props: any) => <thead {...props} />,
//   tbody: (props: any) => <tbody {...props} />,
//   tr: (props: any) => <tr {...props} />,
//   th: (props: any) => (
//     <th
//       className="min-w-[120px] font-medium text-blue-grey-900 text-left py-3 border-b border-blue-grey-100"
//       {...props}
//     />
//   ),
//   td: (props: any) => (
//     <td
//       className="min-w-[120px] text-sm text-blue-grey-500 text-left py-3 border-b border-blue-grey-50"
//       {...props}
//     />
//   ),
//   pre: (props: any) => <Pre {...props} />,
//   State,
//   Observe,
//   Image,
//   ComponentCard,
//   CodeSandbox,
//   StackBlitz,
//   Code,
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
//   Alert,
//   Avatar,
//   Breadcrumbs,
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Checkbox,
//   Chip,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
//   IconButton,
//   Input,
//   Menu,
//   MenuHandler,
//   MenuList,
//   MenuItem,
//   Navbar,
//   Option,
//   Popover,
//   PopoverHandler,
//   PopoverContent,
//   Progress,
//   Radio,
//   Select,
//   Switch,
//   Tabs,
//   TabsHeader,
//   TabsBody,
//   Tab,
//   TabPanel,
//   Textarea,
//   Tooltip,
//   Typography,
// };

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
  const result: any = [];
  // year 디렉토리에서 month 파일 가져옴
  years.forEach((year) => {
    if (year.substr(year.length - 4, year.length) !== ".mdx") {
      const months = fs.readdirSync(path.join(`docs/kr/${year}`));
      // month 디렉토리에서 file 가져옴
      months.forEach((month) => {
        if (month.substr(month.length - 4, month.length) !== ".mdx") {
          const files = fs.readdirSync(path.join(`docs/kr/${year}/${month}`));
          files.forEach((file) => {
            // file 읽어서 목록 push
            if (file.substr(file.length - 4, file.length) === ".mdx") {
              result.push(`${year}/${month}/${file}`);
            }
          });
        }
      });
    }
  });

  const paths = result.map((filename: string) => ({
    params: {
      year: filename.split("/")[0],
      month: filename.split("/")[1],
      slug: filename.split("/")[2].replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

//
interface getStaticPropsType {
  params: {
    year: string;
    month: string;
    slug: string;
  };
}
export const getStaticProps = async ({ params: { year, month, slug } }: getStaticPropsType) => {
  console.log("getStaticProps", year, month, slug);

  const markdownWithMeta = fs.readFileSync(path.join(`docs/kr/${year}/${month}`, slug + ".mdx"));
  console.log(markdownWithMeta);

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [[rehypePrettyCode, options]],
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
