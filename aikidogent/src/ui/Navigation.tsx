'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import { LanguageSwitcher } from '@/features/i18n/LanguageSwitcher';
import { Link, usePathname } from '@/navigation';
import { Hamburger } from '@/ui/Hamburger';

export const Navigation = () => {
  const t = useTranslations();
  const pathName = usePathname();

  return (
    <>
      <nav>
        <ul>
          <li>
            {pathName === '/what-is-aikido' ? (
              <span className="active">{t('whatIsAikido.title')}</span>
            ) : (
              <Link
                href="/what-is-aikido"
                title={t('whatIsAikido.title')}
                target="_self"
              >
                {t('whatIsAikido.title')}
              </Link>
            )}
          </li>
          <li>
            {pathName === '/dojo' ? (
              <span className="active">{t('ourDojo.title')}</span>
            ) : (
              <Link href="/dojo" title="Onze dojo" target="_self">
                {t('ourDojo.title')}
              </Link>
            )}
          </li>
          <li>
            {pathName === '/practical-information' ? (
              <span className="active">{t('practicalInfo.title')}</span>
            ) : (
              <Link
                href="/practical-information"
                title={t('practicalInfo.title')}
                target="_self"
              >
                {t('practicalInfo.title')}
              </Link>
            )}
          </li>
          <li>
            {pathName === '/links' ? (
              <span className="active">{t('links.title')}</span>
            ) : (
              <Link href="/links" title="Links" target="_self">
                {t('links.title')}
              </Link>
            )}
          </li>
          <li>
            <span className="divider" />
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </nav>
      <Hamburger />
    </>
  );
};
