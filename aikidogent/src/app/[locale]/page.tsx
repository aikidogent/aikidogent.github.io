import React, { FC } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { SitemapList } from '@/app/sitemap';
import { Teaser } from '@/features/basic-pages/Teaser';
import { NewsOverview } from '@/features/news';
import { SupportedLocale } from '@/i18n';
import { MainLayout } from '@/layouts';

type Props = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const getSitemap = async (): Promise<SitemapList> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/sitemap`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Home: FC<Props> = async ({ params }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <MainLayout isHomepage>
      <div className="hp-teasers">
        <Teaser basicPageId={400} locale={locale} href="/join-any-time" />
        <Teaser
          basicPageId={420}
          locale={locale}
          href="/tomita-sensei-on-the-essence-of-aikido"
        />
      </div>
      <NewsOverview />
    </MainLayout>
  );
};

export default Home;
