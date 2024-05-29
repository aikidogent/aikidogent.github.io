import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
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
    <MainLayout
      banner={{
        filename: 'hp-banner.jpg',
        width: 1500,
        height: 1187,
        alt: 'Go Ryu dojo',
      }}
      isHomepage
    >
      <NewsOverview />
    </MainLayout>
  );
};

export default Home;
