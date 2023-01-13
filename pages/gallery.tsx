import type { NextPage } from 'next';
import { NewLine } from '../components/new-line';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';

const Gallery: NextPage = () => {
  return (
    <Page>
      <PageHeader question="How am I doing?" />
      <div className="mt-8">
        <p>
          Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet
          justo.
        </p>
      </div>
    </Page>
  );
};

export default Gallery;
