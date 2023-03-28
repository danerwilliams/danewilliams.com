import type { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Title } from '../components/title';

interface HomeProps {
  title: string;
  description: string;
}

const Home: NextPage<HomeProps> = ({ title, description }) => {
  return (
    <>
      <NextSeo
        description={description}
        openGraph={{
          title,
          description,
          url: 'https://danewilliams.dev',
          images: [
            {
              url: 'https://danewilliams.dev/static/images/social/index.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />

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
