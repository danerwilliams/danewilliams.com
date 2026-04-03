import Image from 'next/image';
import { FC } from 'react';

interface A16zIconProps {
  className?: string;
}

export const A16zIcon: FC<Readonly<A16zIconProps>> = ({ className }) => (
  <div className={`relative h-full w-full ${className ?? ''}`}>
    <Image
      fill
      priority={false}
      alt="Andreessen Horowitz logo"
      src="/static/images/logos/a16z.svg"
      className="object-contain"
      sizes="80px"
    />
  </div>
);
