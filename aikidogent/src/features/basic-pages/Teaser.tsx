import { FC } from 'react';
import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { getBasicPage } from '@/features/basic-pages/helpers';
import { SupportedLocale } from '@/i18n';

type Props = {
  slug: string;
};

export const Teaser = async ({ slug }: Props) => {
  const t = await getTranslations();
  const locale = await getLocale();
  const data = await getBasicPage(slug);

  return (
    <Link
      className="teaser"
      href={`/${locale}/${data[locale as SupportedLocale].slug}`}
    >
      <div
        className="image"
        style={{
          backgroundImage: data.image_id
            ? `url(${process.env.NEXT_PUBLIC_API_ROUTE}/images/${data.image_id})`
            : 'url(/images/hp-banner.jpg)',
        }}
      />
      <div className="content">
        <h3>{data[locale as SupportedLocale].title}</h3>
        <p>{data[locale as SupportedLocale].teaser}</p>
      </div>
      <div className="more-link">{t('common.readMore')}</div>
    </Link>
  );
};
