import { NewsDetail } from '@/features/news/types';
import { SupportedLocale } from '@/i18n';

export const getNewsItem = async (
  slug: string,
  locale: SupportedLocale,
): Promise<NewsDetail> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/news/${slug}?language=${locale}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
