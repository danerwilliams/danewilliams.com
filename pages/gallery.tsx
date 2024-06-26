import type { NextPage } from 'next';
import { Page } from '../components/page';
import { PageHeader } from '../components/page-header';
import { GalleryImage, GalleryImageProps } from '../components/gallery-image';
import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { GalleryImages } from '../content/gallery/images';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { NextSeo } from 'next-seo';

interface GalleryProps {
  galleryImages: Omit<GalleryImageProps, 'onClick'>[];
  title: string;
  description: string;
}

const Gallery: NextPage<GalleryProps> = ({
  galleryImages,
  title,
  description,
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentLightboxSlide, setCurrentLightboxSlide] = useState(1);

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: `${title} | Dane Williams`,
          description,
          url: 'https://danewilliams.com/gallery',
          images: [
            {
              url: 'https://danewilliams.com/static/images/social/gallery.jpeg',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <Page>
        <PageHeader question="How am I doing?" />
        <div className="mt-8">
          <p>
            {description} My goal is for this gallery to continue to grow :-D
          </p>
        </div>
        <div className="mt-8">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 480: 2, 1023: 3 }}
          >
            <Masonry gutter={`16px`}>
              {galleryImages.map((galleryImageProps, idx) => (
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
            sources={galleryImages.map((image) => image.src)}
            slide={currentLightboxSlide}
          />
        </div>
      </Page>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      galleryImages: GalleryImages,
      title: 'Gallery',
      description:
        'Here are some of the people I’ve gotten to meet and some of the places I’ve been lately.',
    },
  };
}

export default Gallery;
