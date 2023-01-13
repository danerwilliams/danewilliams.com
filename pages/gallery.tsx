import type { NextPage } from 'next';
import Image from 'next/image';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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
      <ResponsiveMasonry columnsCountBreakPoints={{ 639: 2, 767: 3, 1023: 4 }}>
        <Masonry>
          <Image
            width={300}
            height={300}
            alt=""
            src="/Gallery/AlumniTourney.png"
          />
          <Image
            width={300}
            height={300}
            alt=""
            src="/Gallery/AmazonSpheres.png"
          />
          <Image width={100} height={100} alt="" src="/Gallery/BernBear.png" />
          <Image
            width={300}
            height={300}
            alt=""
            src="/Gallery/CentralPark.png"
          />
          <Image
            width={300}
            height={300}
            alt=""
            src="/Gallery/CinqueTerreBaggies.png"
          />
          <Image
            width={300}
            height={300}
            alt=""
            src="/Gallery/CodersGrad.png"
          />
        </Masonry>
      </ResponsiveMasonry>
    </Page>
  );
};

export default Gallery;
