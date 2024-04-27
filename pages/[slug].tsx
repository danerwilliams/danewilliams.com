import { NextPage } from 'next';
import {
  convertMarkdownToHtml,
  getAllArticles,
  getArticleBySlug,
} from '../lib/journal';
import { Article as ArticleMetadata } from '../lib/journal';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import Head from 'next/head';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Page } from '../components/page';
import styles from '../styles/article-body.module.css';

interface ArticleProps {
  article: ArticleMetadata;
  content: string;
}

const Article: NextPage<ArticleProps> = ({ article, content }) => {
  const title = `${article.title} | Dane Williams`;
  const description = article.description || '';
  const url = `https://danewilliams.com/${article.slug}`;
  const date = new Date(article.date).toISOString();

  return (
    <>
      <NextSeo
        title={article.title}
        description={description}
        openGraph={{
          title,
          description,
          url,
          images: [
            {
              url: 'https://danewilliams.com/static/images/social/article.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />
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
      <Page>
        <div className="flex flex-col md:max-w-[551.5px] lg:max-w-full mt-8">
          <div className="flex flex-col text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
            <h1 className="text-3xl font-medium">{article.title}</h1>
            <div className="flex items-center text-lg mt-2">
              <CalendarIcon height={20} width={20} />
              <div className="ml-2">
                {new Date(Date.parse(date)).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  timeZone: 'UTC',
                })}
              </div>
            </div>
          </div>
          <div className="article-body mt-6">
            <div
              className={styles['article-body']}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </Page>
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
