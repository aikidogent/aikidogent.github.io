import { FC } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { getNewsItem } from '@/features/news';
import { SupportedLocale } from '@/i18n';
import { MainLayout } from '@/layouts';
import { preProcessContent } from '@/utils';

type Props = {
  params: Promise<{
    slug: string;
    locale: SupportedLocale;
  }>;
};

const Page: FC<Props> = async ({ params }) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const data = await getNewsItem(slug, locale);

  return (
    <MainLayout pageTitle={data.title} bannerId={data.image_id}>
      <div
        dangerouslySetInnerHTML={{ __html: preProcessContent(data.content) }}
      />
    </MainLayout>
  );
};

export default Page;
