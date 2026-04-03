import { FC } from 'react';

interface A16zIconProps {
  className?: string;
}

export const A16zIcon: FC<Readonly<A16zIconProps>> = ({ className }) => (
  <div className={`relative h-full w-full ${className ?? ''}`}>
    <span
      aria-hidden="true"
      className="absolute inset-0 bg-current"
      style={{
        WebkitMaskImage: 'url(/static/images/logos/a16z.svg)',
        maskImage: 'url(/static/images/logos/a16z.svg)',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  </div>
);
