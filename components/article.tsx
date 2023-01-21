import Link from 'next/link';
import { FC } from 'react';

export interface ArticleProps {
  title: string;
  preview: string;
  date: Date;
  url: string;
}

export const Article: FC<Readonly<ArticleProps>> = ({
  title,
  preview,
  date,
  url,
}) => {
  return (
    <Link href={url}>
      <div className="flex grow h-40 border rounded-lg border-lightmode-border dark:border-darkmode-border bg-lightmode-component dark:bg-darkmode-component hover:bg-lightmode-component-hover hover:dark:bg-darkmode-component-hover duration-200">
        <div className="flex flex-col grow m-4">
          <h2 className="text-xl text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
            {title}
          </h2>
          <div className="flex mt-2 h-24">
            <p className="font-light overflow-hidden">{preview}</p>
            <div className="flex ml-4 items-end justify-end whitespace-nowrap">
              {date.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
