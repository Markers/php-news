import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import { join } from 'path';
import fs from 'fs';

const docsDirectory = join(process.cwd(), 'docs');

export function getDocByUrl(transtaionUrl: string) {
  const realUrl = transtaionUrl.replace(/\.md$/, '');
  const fullPath = join(docsDirectory, `${realUrl}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return { url: realUrl, meta: data, content };
}

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
