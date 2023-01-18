import Image from 'next/image';

export interface GalleryImageProps {
  src: string;
  height: number;
  caption: string;
  priority?: boolean;
  onClick: () => void;
}

export const GalleryImage = ({
  src,
  height,
  caption,
  priority,
  onClick,
}: GalleryImageProps) => {
  return (
    <div
      style={{ height }}
      className="relative hover:cursor-pointer z-0"
      onClick={onClick}
    >
      <div className="absolute rounded-md h-full w-full flex flex-col items-center justify-center z-10 bg-lightmode-component-hover/80 dark:bg-darkmode-component-hover/80 sm:hover:opacity-100 opacity-0 duration-200">
        <p className="mx-auto">{caption}</p>
      </div>
      <Image
        src={src}
        alt={caption}
        fill
        className="relative object-cover rounded-md z-0"
        sizes="370px"
        priority={priority}
        quality={50}
      />
    </div>
  );
};
