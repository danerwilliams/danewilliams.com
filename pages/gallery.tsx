import type { NextPage } from 'next';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { GalleryImage } from '../components/gallery-image';
import { createRef, useLayoutEffect, useRef, useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { GalleryImages } from '../content/gallery/images';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

const GALLERY_MARGIN = 8;

const Gallery: NextPage = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxSlide, setCurrentLightboxSlide] = useState(1);

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
        <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 480: 2, 1023: 3 }}>
          <Masonry gutter={`${GALLERY_MARGIN}px`}>
            {GalleryImages.map((galleryImageProps, idx) => (
              <GalleryImage
                key={`Gallery Image ${idx}`}
                onClick={() => {
                  setIsLightboxOpen(!isLightboxOpen);
                  setCurrentLightboxSlide(idx + 1);
                }}
                priority={idx < 5}
                {...galleryImageProps}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
        <FsLightbox
          toggler={isLightboxOpen}
          sources={GalleryImages.map((image) => image.src)}
          slide={currentLightboxSlide}
        />
      </div>
    </Page>
  );
};

export default Gallery;
