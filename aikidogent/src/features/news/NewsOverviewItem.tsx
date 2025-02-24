import { FC } from 'react';
import Link from 'next/link';
import { getLocale } from 'next-intl/server';
import { type NewsListItem } from '@/features/news/types';

export const NewsOverviewItem: FC<NewsListItem> = async ({
  id,
  slug,
  image_id,
  title,
  teaser,
}) => {
  const locale = await getLocale();

  return (
    <li className="news-teaser" key={id}>
      <Link href={locale === 'nl' ? `/nl/nieuws/${slug}` : `/en/news/${slug}`}>
        {image_id ? (
          <div
            className="image"
            style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_API_ROUTE}/images/${image_id})`,
            }}
          />
        ) : null}
        <div className="content">
          <h3>{title}</h3>
          <p>{teaser}</p>
          <div className="chevron-right">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M13.5 8l-9 8-2-2.3L8.9 8 2.5 2.3l2-2.3z" />
            </svg>
          </div>
        </div>
      </Link>
    </li>
  );
};
