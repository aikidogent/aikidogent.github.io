export type BasicPageTeaser = {
  id: number;
  slug_nl: string;
  slug_en: string;
  title_nl: string;
  title_en: string;
  teaser_nl: string;
  teaser_en: string;
  start_date: string | null;
  end_date: string | null;
  created: string;
  modified: string;
  link: string;
  image_id: string;
};

export type LinksItem = {
  rel: string;
  href: string;
};

export type BasicPageList = {
  items: BasicPageTeaser[];
  hasMore: boolean;
  limit: number;
  offset: number;
  count: number;
  links: LinksItem[];
};

export type BasicPageDetail = BasicPageTeaser & {
  content_nl: string;
  content_en: string;
  seo_keywords_nl: string;
  seo_keywords_en: string;
  seo_description_nl: string;
  seo_description_en: string;
  links: LinksItem[];
};

export type ParsedLocalizedBasicPageDetailContent = {
  slug: string;
  title: string;
  teaser: string;
  content: string;
  seo: {
    keywords: string;
    description: string;
  };
};

export type ParsedBasicPageDetail = {
  id: number;
  nl: ParsedLocalizedBasicPageDetailContent;
  en: ParsedLocalizedBasicPageDetailContent;
  start_date: string | null;
  end_date: string | null;
  created: string;
  modified: string;
  image_id: string;
};
