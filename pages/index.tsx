import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Title } from '../components/title';

interface HomeProps {
  title: string;
  description: string;
}

const Home: NextPage<HomeProps> = ({ title }) => {
  const seoDescription =
    'Dane Williams is a software engineer in New York City';
  return (
    <>
      <NextSeo
        description={seoDescription}
        openGraph={{
          title,
          description: seoDescription,
          url: 'https://danewilliams.com',
          images: [
            {
              url: 'https://danewilliams.com/static/images/social/index.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />

      <div className="flex flex-grow items-center">
        <Title title={title} />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      title: 'Dane Williams',
    },
  };
}

export default Home;
