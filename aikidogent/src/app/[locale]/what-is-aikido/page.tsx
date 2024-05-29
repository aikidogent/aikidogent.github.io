import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import { SupportedLocale } from '@/features/i18n';

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

const Page: FC<Props> = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const t = useTranslations('whatIsAikido');

  return <main>{t('title')}</main>;
};

export default Page;
