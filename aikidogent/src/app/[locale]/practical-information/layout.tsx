import type { FC, ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { MainLayout } from '@/layouts';

type Props = {
  children?: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const t = useTranslations('practicalInfo');

  return (
    <MainLayout
      pageTitle={t('title')}
      banner={{
        filename: 'aikido.jpg',
        width: 1683,
        height: 852,
        alt: t('title'),
      }}
    >
      {children}
    </MainLayout>
  );
};

export default Layout;
