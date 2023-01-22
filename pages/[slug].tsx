import { NextPage } from 'next';
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from '../lib/journal';
import { Article as ArticleMetadata } from '../lib/journal';
import { ArticleJsonLd } from 'next-seo';
import Head from 'next/head';

interface ArticleProps {
  article: ArticleMetadata;
  content: string;
}

const Article: NextPage<ArticleProps> = ({ article, content }) => {
  const title = `${article.title} // Dane Williams`;
  const description = article.description || '';
  const url = `https://danewilliams.dev/${article.slug}`;
  const date = new Date(article.date).toISOString();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content={url} property="og:url" />
      </Head>

      <ArticleJsonLd
        authorName="Dane Williams"
        type="Blog"
        url={url}
        title={title}
        images={[]}
        datePublished={date}
        dateModified={date}
        description={description}
      />

      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(slug);
  const content = await convertMarkdownToHtml(article.content || '');

  return {
    props: {
      article,
      content,
    },
  };
}

export async function getStaticPaths() {
  const articles = getAllArticles();

  console.log({ articles: articles.map((article) => article.slug) });

  return {
    paths: articles.map((article) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: 'blocking',
  };
}

export default Article;
