import type { FC, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { MainLayout } from '@/layouts';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const t = useTranslations('links');

  return <MainLayout pageTitle={t('title')}>{children}</MainLayout>;
};

export default Layout;
