import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Teaser } from '@/features/basic-pages/Teaser';
import { SupportedLocale } from '@/features/i18n';
import { NewsOverview } from '@/features/news';
import { MainLayout } from '@/layouts';

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

const Home: FC<Props> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('homepage');

  return (
    <MainLayout isHomepage>
      <div className="hp-teasers">
        <Teaser basicPageId={60} locale={locale} href="/join-any-time" />
        <Teaser
          basicPageId={200}
          locale={locale}
          href="/tomita-sensei-on-the-essence-of-aikido"
        />
      </div>
      <NewsOverview />
    </MainLayout>
  );
};

export default Home;
