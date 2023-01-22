import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import prism from 'remark-prism';

export interface Article {
  date: string;
  title: string;
  content: string;
  slug: string;
  description: string;
}

const articlesDirectory = join(process.cwd(), 'content/journal');

const getArticleSlugs = () => {
  return fs.readdirSync(articlesDirectory);
};

export const getArticleBySlug = (slug: string): Article => {
  const trimmedSlug = slug.replace(/\.md$/, '');
  const postPath = join(articlesDirectory, `${trimmedSlug}.md`);
  const fileContents = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug: trimmedSlug,
    content: content,
    date: data.date,
    title: data.title,
    description: data.description,
  };
};

export const getAllArticles = () => {
  const slugs = getArticleSlugs();
  console.log({ slugs });
  const posts = slugs
    .map((slug) => getArticleBySlug(slug))
    .sort(
      (article1, article2) =>
        new Date(article2.date).getTime() - new Date(article1.date).getTime(),
    );

  return posts;
};

export async function convertMarkdownToHtml(markdown: string) {
  const result = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);
  return result.toString();
}
