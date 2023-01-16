import { ThumbnailImageProps } from 'react-grid-gallery';
import Image from 'next/image';

export const GalleryImage = (props: ThumbnailImageProps) => {
  const { alt, src, style, title } = props.imageProps;

  console.log({ style });

  return (
    <div className="relative hover:cursor-pointer">
      <div
        style={style}
        className="absolute flex flex-col items-center justify-center z-10 bg-lightmode-component-hover/80 dark:bg-darkmode-component-hover/80 hover:opacity-100 opacity-0 duration-200"
      >
        <p className="mx-auto">{title}</p>
      </div>
      <div style={style} className="z-0">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
};
