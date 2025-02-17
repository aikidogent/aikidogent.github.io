import { FC } from 'react';
import { NewsTeaser } from '@/features/news/types';
import { Link } from '@/i18n/routing';

export const NewsOverviewItem: FC<NewsTeaser> = async ({
  id,
  slug,
  image_id,
  title,
  teaser,
}) => (
  <li className="news-teaser" key={id}>
    <Link href={{ pathname: '/news/[id]', params: { id: slug ?? '' } }}>
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
