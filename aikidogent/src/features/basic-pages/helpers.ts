import { NewsDetail } from '@/features/news/types';
import { SupportedLocale } from '@/i18n';
import type { BasicPageDetail, ParsedBasicPageDetail } from './types';

export const getBasicPage = async (
  slug: string,
): Promise<ParsedBasicPageDetail> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_ROUTE}/basic_pages/${slug}`,
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const response: BasicPageDetail = await res.json();

  return {
    id: response.id,
    nl: {
      slug: response.slug_nl,
      title: response.title_nl,
      teaser: response.teaser_nl,
      content: response.content_nl,
      seo: {
        keywords: response.seo_keywords_nl,
        description: response.seo_description_nl,
      },
    },
    en: {
      slug: response.slug_en,
      title: response.title_en,
      teaser: response.teaser_en,
      content: response.content_en,
      seo: {
        keywords: response.seo_keywords_en,
        description: response.seo_description_en,
      },
    },
    start_date: response.start_date,
    end_date: response.end_date,
    created: response.created,
    modified: response.modified,
    image_id: response.image_id,
  };
};
