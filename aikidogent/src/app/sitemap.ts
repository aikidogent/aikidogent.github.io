import type { MetadataRoute } from 'next';
import { LinksItem } from '@/features/news/types';

export type SitemapItem = {
  id: string;
  type: 'basic_page' | 'news';
  data: string;
};

export type ParsedLocalizedData = {
  slug?: string;
  title: string;
  created: string;
  modified: string;
};

export type ParsedData = {
  nl: ParsedLocalizedData;
  en: ParsedLocalizedData;
};

export type ParsedSitemapItem = Omit<SitemapItem, 'data'> & {
  data: ParsedData;
};

export type SitemapList = {
  items: SitemapItem[];
  hasMore: boolean;
  limit: number;
  offset: number;
  count: number;
  links: LinksItem[];
};

const getSitemap = async (): Promise<SitemapList> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/sitemap`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const data = await getSitemap();
  const items: ParsedSitemapItem[] = data.items.map((item) => ({
    ...item,
    data: JSON.parse(item.data),
  }));

  return items.map((item) => {
    let nlSlug = '';
    let enSlug = '';

    if (item.type === 'news') {
      nlSlug = item.data.nl.slug ? `/nl/nieuws/${item.data.nl.slug}` : '';
      enSlug = item.data.en.slug ? `/en/news/${item.data.en.slug}` : '';
    } else {
      nlSlug = item.data.nl.slug ? `/nl/${item.data.nl.slug}` : '';
      enSlug = item.data.en.slug ? `/en/${item.data.en.slug}` : '';
    }

    return {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${nlSlug}`,
      lastModified: item.data.nl.modified ?? item.data.nl.created,
      alternates: {
        languages: {
          nl: `${process.env.NEXT_PUBLIC_BASE_URL}${nlSlug}`,
          en: `${process.env.NEXT_PUBLIC_BASE_URL}${enSlug}`,
        },
      },
    };
  });
};

export default sitemap;
