import { ThumbnailImageProps } from 'react-grid-gallery';
import Image from 'next/image';

export const GalleryImage = (props: ThumbnailImageProps) => {
  const { alt, src, style, title } = props.imageProps;

  return (
    <div className="relative hover:cursor-pointer">
      <div
        style={{ width: style.width, height: style.height }}
        className="absolute flex flex-col items-center justify-center z-10 bg-lightmode-component-hover dark:bg-darkmode-component-hover opacity-0 hover:opacity-80 duration-200"
      >
        {title}
      </div>
      <div style={{ width: style.width, height: style.height }} className="z-0">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
};
