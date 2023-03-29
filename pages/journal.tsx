import type { NextPage } from 'next';
import { Article } from '../components/article';
import { getAllArticles, Article as ArticleMetadata } from '../lib/journal';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import Fuse from 'fuse.js';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { NextSeo } from 'next-seo';

interface JournalProps {
  articles: ArticleMetadata[];
  title: string;
  description: string;
}

const Journal: NextPage<JournalProps> = ({ articles, title, description }) => {
  const [searchArticles, setSearchArticles] = useState(articles);

  const search = (query: string) => {
    if (!query) {
      setSearchArticles(articles);
      return;
    }

    const fuse = new Fuse(articles, {
      keys: ['title'],
      threshold: 0.4,
    });
    const result = fuse.search(query);

    setSearchArticles(result.map((r) => r.item));
  };

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: `${title} | Dane Williams`,
          description,
          url: 'https://danewilliams.dev/journal',
          images: [
            {
              url: 'https://danewilliams.dev/static/images/social/journal.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Page>
        <PageHeader question="What do I think?" />
        <div className="mt-8">
          <p>{description} Writing effort varies.</p>
          <div className="flex relative h-14 mt-8 items-center w-full">
            <div className="absolute pl-4">
              <MagnifyingGlassIcon className="h-6 w-6" />
            </div>
            <input
              className="w-full h-full rounded-lg border text-lg pl-14 font-light bg-lightmode-component-hover dark:bg-darkmode-component-hover border-lightmode-border-interactive dark:border-darkmode-border-interactive"
              type="text"
              onChange={(e) => search(e.target.value)}
              placeholder="Find an article"
            />
          </div>
          <div className="mt-6">
            {searchArticles.map((article) => (
              <div className="mt-4" key={article.title}>
                <Article
                  description={article.description}
                  title={article.title}
                  date={article.date}
                  url={`/${article.slug}`}
                />
              </div>
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};

export async function getStaticProps() {
  const articles = getAllArticles();

  return {
    props: {
      articles,
      title: 'Journal',
      description:
        'Here is some of my writing. I try to occasionally write brief memos with updates on major things happening in my life and career, among other topics.',
    },
  };
}

export default Journal;
