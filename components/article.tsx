import Link from 'next/link';
import { FC } from 'react';

export interface ArticleProps {
  title: string;
  description: string;
  date: string;
  url: string;
}

export const Article: FC<Readonly<ArticleProps>> = ({
  title,
  description,
  date,
  url,
}) => {
  return (
    <Link href={url}>
      <div className="flex grow h-30 border rounded-lg border-lightmode-border dark:border-darkmode-border bg-lightmode-component dark:bg-darkmode-component hover:bg-lightmode-component-hover hover:dark:bg-darkmode-component-hover duration-200">
        <div className="flex flex-col grow m-4">
          <div className="table table-fixed w-full">
            <h2 className="text-xl table-cell truncate text-lightmode-text-high-contrast dark:text-darkmode-text-high-contrast">
              {title}
            </h2>
          </div>
          <div className="flex mt-2 h-12">
            <div className="flex grow">
              <p className="font-light overflow-hidden">{description}</p>
            </div>
            <div className="flex ml-4 items-end justify-end whitespace-nowrap">
              <div className="hidden md:block">
                {new Date(Date.parse(date)).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
              <div className="md:hidden">
                {new Date(Date.parse(date)).toLocaleString('en-US', {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
