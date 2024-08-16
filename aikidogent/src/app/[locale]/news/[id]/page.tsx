import { FC } from 'react';
import { SupportedLocale } from '@/features/i18n';
import { getNewsItem } from '@/features/news';
import { MainLayout } from '@/layouts';
import { preProcessContent } from '@/utils';

type Props = {
  params: {
    id: string;
    locale: SupportedLocale;
  };
};

const Page: FC<Props> = async ({ params: { id, locale } }) => {
  const data = await getNewsItem(id, locale);

  return (
    <MainLayout pageTitle={data.title}>
      <div
        dangerouslySetInnerHTML={{ __html: preProcessContent(data.content) }}
      />
    </MainLayout>
  );
};

export default Page;
