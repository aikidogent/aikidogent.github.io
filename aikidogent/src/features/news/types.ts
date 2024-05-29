export type NewsTeaser = {
  id: number;
  title: string;
  teaser: string;
  start_date: string | null;
  end_date: string | null;
  created: string;
  modified: string;
  link: string;
};

export type LinksItem = {
  rel: string;
  href: string;
};

export type NewsList = {
  items: NewsTeaser[];
  hasMore: boolean;
  limit: number;
  offset: number;
  count: number;
  links: LinksItem[];
};

export type NewsDetail = NewsTeaser & {
  content: string;
  seo_keywords: string;
  seo_description: string;
  links: LinksItem[];
};
