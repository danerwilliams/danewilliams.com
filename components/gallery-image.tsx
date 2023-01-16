import Image from 'next/image';

export interface GalleryImageProps {
  src: string;
  height: number;
  caption: string;
  onClick: () => void;
}

export const GalleryImage = ({
  src,
  height,
  caption,
  onClick,
}: GalleryImageProps) => {
  return (
    <div
      style={{ height }}
      className="relative hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute h-full w-full flex flex-col items-center justify-center z-10 bg-lightmode-component-hover/80 dark:bg-darkmode-component-hover/80 hover:opacity-100 opacity-0 duration-200">
        <p className="mx-auto">{caption}</p>
      </div>
      <div className="z-0">
        <Image src={src} alt={caption} fill className="object-cover" />
      </div>
    </div>
  );
};
