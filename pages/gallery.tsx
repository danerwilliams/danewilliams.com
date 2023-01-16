import type { NextPage } from 'next';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import {
  Gallery as GridGallery,
  Image as GridGalleryImage,
  ThumbnailImageProps,
} from 'react-grid-gallery';
import { GalleryImage } from '../components/gallery-image';
import { useEffect, useState } from 'react';
import FsLightbox from 'fslightbox-react';

const gridGalleryImages: GridGalleryImage[] = [
  {
    src: '/gallery/AlumniTourney.png',
    height: 100,
    width: 200,
    caption: 'sdlfkjsdlkfjdfslkj',
  },
  {
    src: '/gallery/AmazonSpheres.png',
    height: 300,
    width: 300,
    caption: '',
  },
  {
    src: '/gallery/BernBear.png',
    height: 300,
    width: 300,
    caption: '',
  },
  {
    src: '/gallery/CentralPark.png',
    height: 300,
    width: 300,
    caption: '',
  },
  {
    src: '/gallery/CinqueTerreBaggies.png',
    height: 300,
    width: 300,
    caption: '',
  },
  {
    src: '/gallery/CodersGrad.png',
    height: 300,
    width: 300,
    caption: '',
  },
  {
    src: '/gallery/CompoundRoof.png',
    height: 300,
    width: 300,
    caption: '',
  },
];

const Gallery: NextPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxSlide, setCurrentLightboxSlide] = useState(1);

  console.log({ currentLightboxSlide, isLightboxOpen });

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
      <div className="mt-8 ">
        <GridGallery
          images={gridGalleryImages}
          thumbnailImageComponent={GalleryImage}
          enableImageSelection={false}
          margin={6}
          onClick={(slide: number, _image) => {
            setCurrentLightboxSlide(slide + 1);
            setIsLightboxOpen(!isLightboxOpen);
          }}
        />
        <FsLightbox
          toggler={isLightboxOpen}
          sources={gridGalleryImages.map((image) => image.src)}
          slide={currentLightboxSlide}
          // onClose={() => setIsLightboxOpen()}
        />
      </div>
    </Page>
  );
};

export default Gallery;
