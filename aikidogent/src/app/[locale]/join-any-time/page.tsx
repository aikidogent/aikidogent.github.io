import React, { FC } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { getBasicPage } from '@/features/basic-pages';
import { SupportedLocale } from '@/i18n';
import { MainLayout } from '@/layouts';
import { preProcessContent } from '@/utils';

type Props = {
  params: Promise<{
    locale: SupportedLocale;
  }>;
};

const Page: FC<Props> = async ({ params }) => {
  const { locale } = await params;

  setRequestLocale(locale);

  const data = await getBasicPage(400, locale);

  return (
    <MainLayout pageTitle={data.title} bannerId={data.image_id}>
      <div
        dangerouslySetInnerHTML={{ __html: preProcessContent(data.content) }}
      />
    </MainLayout>
  );
};

export default Page;
