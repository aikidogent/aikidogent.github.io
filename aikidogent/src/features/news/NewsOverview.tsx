import { getLocale, getTranslations } from 'next-intl/server';
import { NewsOverviewItem } from '@/features/news/NewsOverviewItem';
import { SupportedLocale } from '@/i18n';
import { NewsList } from './types';

const getNews = async (locale: SupportedLocale): Promise<NewsList> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/news?language=${locale}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

export const NewsOverview = async () => {
  const t = await getTranslations('news');
  const locale = await getLocale();
  const data = await getNews(locale as SupportedLocale);

  return (
    <div className="news">
      <h2>{t('title')}</h2>
      <ul>
        {data.items.map((item) =>
          item.slug ? <NewsOverviewItem key={item.id} {...item} /> : null,
        )}
      </ul>
    </div>
  );
};
