import type { NextPage } from 'next';
import Head from 'next/head';
import { Title } from '../components/title';

interface HomeProps {
  title: string;
  description: string;
}

const Home: NextPage<HomeProps> = ({ title, description }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <div className="flex flex-grow items-center">
        <Title title={title} description={description} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Dane Williams',
      description: 'lorem ipsum dolor sit amet consectatur apidiscing',
    },
  };
}

export default Home;
