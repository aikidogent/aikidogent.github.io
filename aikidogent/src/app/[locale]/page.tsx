import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { SupportedLocale } from '@/features/i18n';
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
    >
      <main>{t('title')}</main>
    </MainLayout>
  );
};

export default Home;
