import React, { FC } from 'react';
import { unstable_setRequestLocale } from 'next-intl/server';
import { getBasicPage } from '@/features/basic-pages';
import { SupportedLocale } from '@/features/i18n';
import { MainLayout } from '@/layouts';
import { preProcessContent } from '@/utils';

type Props = {
  params: {
    locale: SupportedLocale;
  };
};

const Page: FC<Props> = async ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const data = await getBasicPage('61', locale);

  return (
    <MainLayout pageTitle={data.title}>
      <div
        dangerouslySetInnerHTML={{ __html: preProcessContent(data.content) }}
      />
    </MainLayout>
  );
};

export default Page;
