import type { NextPage } from 'next';
import { Article } from '../components/article';
import { getAllArticles, Article as ArticleMetadata } from '../lib/journal';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import Fuse from 'fuse.js';
import { useState } from 'react';

interface JournalProps {
  articles: ArticleMetadata[];
}

const Journal: NextPage<JournalProps> = ({ articles }) => {
  const [searchArticles, setSearchArticles] = useState(articles);

  const fuse = new Fuse(searchArticles, {
    keys: ['name', 'tags'],
  });

  const search = (query: string) => {
    if (!query) {
      setSearchArticles(articles);
      return;
    }
    query = query.toLowerCase();

    const fuse = new Fuse(articles, {
      keys: ['title', 'description'],
    });
    const result = fuse.search(query);

    setSearchArticles(result.map((r) => r.item));
  };

  return (
    <Page>
      <PageHeader question="What do I think?" />
      <div className="mt-8">
        <p>
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet
          justo.
        </p>
        <input
          type="search"
          onChange={(e) => search(e.target.value)}
          placeholder="Search Technologies"
        />
        <div className="mt-8">
          {articles.map((article) => (
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
  );
};

export async function getStaticProps() {
  const articles = getAllArticles();

  return {
    props: {
      articles,
    },
  };
}

export default Journal;
