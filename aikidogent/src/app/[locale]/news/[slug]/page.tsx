import { FC } from 'react';
import { setRequestLocale } from 'next-intl/server';
import { MobileMenu } from '@/features/navigation/MobileMenu';
import { Navigation } from '@/features/navigation/Navigation';
import { getNewsItem } from '@/features/news';
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

const Page: FC<Props> = async ({ params }) => {
  const { locale, slug } = await params;

  setRequestLocale(locale);

  const data = await getNewsItem(slug, locale);

  return (
    <>
      <header>
        <Logo type="mobile" />
        <Navigation
          currentLocale={locale}
          translationLinks={{
            nl: `/nl/nieuws/${data.nl.slug}`,
            en: `/en/news/${data.en.slug}`,
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
          nl: `/nl/nieuws/${data.nl.slug}`,
          en: `/en/news/${data.en.slug}`,
        }}
      />
    </>
  );
};

export default Page;
