import { FC } from 'react';
import { NewsDetail } from '@/features/news/types';
import { MainLayout } from '@/layouts';
import { preProcessContent } from '@/utils';

type Props = {
  params: {
    id: string;
  };
};

const getNewsItem = async (id: string): Promise<NewsDetail> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROUTE}/news/${id}`);

  console.log({ res });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Page: FC<Props> = async ({ params: { id } }) => {
  const data = await getNewsItem(id);

  console.log({ content: data.content });

  return (
    <MainLayout pageTitle={data.title}>
      <div
        dangerouslySetInnerHTML={{ __html: preProcessContent(data.content) }}
      />
    </MainLayout>
  );
};

export default Page;
