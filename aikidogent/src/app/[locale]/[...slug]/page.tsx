import { FC } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { getBasicPage } from '@/features/basic-pages';
import { MobileMenu } from '@/features/navigation/MobileMenu';
import { Navigation } from '@/features/navigation/Navigation';
import { SupportedLocale } from '@/i18n';
import { MainLayout } from '@/layouts';
import { Logo } from '@/ui/Logo';
import { preProcessContent } from '@/utils';

type Props = {
  params: Promise<{
    slug: string;
    locale: SupportedLocale;
  }>;
};

const BasicPage: FC<Props> = async ({ params }) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const data = await getBasicPage(slug);

  return (
    <>
      <header>
        <Logo type="mobile" />
        <Navigation
          currentLocale={locale}
          translationLinks={{
            nl: `/nl/${data.nl.slug}`,
            en: `/en/${data.en.slug}`,
          }}
        />
      </header>
      <div className="page-content">
        <Logo type="desktop" />
        <MainLayout pageTitle={data[locale].title} bannerId={data.image_id}>
          <div
            dangerouslySetInnerHTML={{
              __html: preProcessContent(data[locale].content),
            }}
          />
        </MainLayout>
      </div>
      <footer>
        <p>&copy; 2024 - Ban Sen Juku Go Ryu</p>
      </footer>
      <MobileMenu
        currentLocale={locale}
        translationLinks={{
          nl: `/nl/${data.nl.slug}`,
          en: `/en/${data.en.slug}`,
        }}
      />
    </>
  );
};

export default BasicPage;
