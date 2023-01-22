import type { NextPage } from 'next';
import { Article } from '../components/article';
import { Article as ArticleMetadata } from '../lib/journal';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { getAllArticles } from '../lib/journal';

export async function getStaticProps() {
  const articles = getAllArticles();

  return {
    props: {
      articles,
    },
  };
}

interface JournalProps {
  articles: ArticleMetadata[];
}

const Journal: NextPage<JournalProps> = ({ articles }) => {
  return (
    <Page>
      <PageHeader question="What do I think?" />
      <div className="mt-8">
        <p>
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet
          justo.
        </p>
        <div className="mt-8">
          {articles.map((article) => (
            <div className="mt-4" key={article.title}>
              <Article
                description={article.description}
                title={article.title}
                date={article.date}
                url={`/journal/${article.slug}`}
              />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Journal;
