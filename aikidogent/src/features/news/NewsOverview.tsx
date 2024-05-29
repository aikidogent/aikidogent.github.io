import { getTranslations } from 'next-intl/server';
import { Link } from '@/navigation';
import { NewsList } from './types';

const getNews = async (): Promise<NewsList> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/news`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const NewsOverview = async () => {
  const t = await getTranslations('news');
  const data = await getNews();

  return (
    <div className="news">
      <h2>{t('title')}</h2>
      <ul>
        {data.items.map((item) => (
          <li className="news-teaser" key={item.id}>
            <Link href={{ pathname: '/news/[id]', params: { id: item.id } }}>
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.teaser}</p>
                <div className="chevron-right">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M13.5 8l-9 8-2-2.3L8.9 8 2.5 2.3l2-2.3z" />
                  </svg>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
