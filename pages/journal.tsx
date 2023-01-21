import type { NextPage } from 'next';
import { Article, ArticleProps } from '../components/article';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';

const articles: ArticleProps[] = [
  {
    title: 'Officially a Notre Dame alumnus',
    preview:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
    date: new Date(),
    url: '/journal/officially-a-notre-dame-alumnus',
  },
];

const Journal: NextPage = () => {
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
            <div key={article.title}>
              <Article {...article} />
            </div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Journal;
