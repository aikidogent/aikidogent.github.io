import React, { FC } from 'react';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { getBasicPage } from '@/features/basic-pages/helpers';
import { SupportedLocale } from '@/i18n';
import { getPathname } from '@/i18n/routing';

type Props = {
  basicPageId: number;
  locale: SupportedLocale;
  href: string;
};

export const Teaser: FC<Props> = async ({ basicPageId, locale, href }) => {
  const t = await getTranslations();
  const data = await getBasicPage(basicPageId, locale);

  return (
    <Link
      className="teaser"
      href={getPathname({
        locale,
        // @ts-expect-error -- typing issue
        href,
      })}
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
        <h3>{data.title}</h3>
        <p>{data.teaser}</p>
      </div>
      <div className="more-link">{t('common.readMore')}</div>
    </Link>
  );
};
