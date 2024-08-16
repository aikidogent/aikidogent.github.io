import { SupportedLocale } from '@/features/i18n';
import { NewsDetail } from '@/features/news/types';

export const getNewsItem = async (
  id: string,
  locale: SupportedLocale,
): Promise<NewsDetail> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/news/${id}?language=${locale}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
