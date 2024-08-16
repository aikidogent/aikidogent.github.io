'use client';

import React, { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useMobileMenu } from '@/context';
import { LanguageSwitcher } from '@/features/i18n/LanguageSwitcher';
import { Link, usePathname } from '@/navigation';

type Props = {};

export const MobileMenu: FC<Props> = ({}) => {
  const t = useTranslations();
  const pathName = usePathname();
  const { open, setOpen } = useMobileMenu();

  return (
    <>
      <div className={`mobile-menu-backdrop ${open ? 'open' : 'closed'}`} />
      <div className={`mobile-menu ${open ? 'open' : 'closed'}`}>
        <ul>
          <li>
            {pathName === '/' ? (
              <span className="active">{t('homepage.title')}</span>
            ) : (
              <Link
                href="/"
                title={t('homepage.title')}
                target="_self"
                onClick={() => setOpen(false)}
              >
                {t('homepage.title')}
              </Link>
            )}
          </li>
          <li>
            {pathName === '/what-is-aikido' ? (
              <span className="active">{t('whatIsAikido.title')}</span>
            ) : (
              <Link
                href="/what-is-aikido"
                title={t('whatIsAikido.title')}
                target="_self"
                onClick={() => setOpen(false)}
              >
                {t('whatIsAikido.title')}
              </Link>
            )}
          </li>
          <li>
            {pathName === '/dojo' ? (
              <span className="active">{t('ourDojo.title')}</span>
            ) : (
              <Link
                href="/dojo"
                title="Onze dojo"
                target="_self"
                onClick={() => setOpen(false)}
              >
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
                onClick={() => setOpen(false)}
              >
                {t('practicalInfo.title')}
              </Link>
            )}
          </li>
          <li>
            {pathName === '/links' ? (
              <span className="active">{t('links.title')}</span>
            ) : (
              <Link
                href="/links"
                title="Links"
                target="_self"
                onClick={() => setOpen(false)}
              >
                {t('links.title')}
              </Link>
            )}
          </li>
          <li>
            <LanguageSwitcher />
          </li>
        </ul>
      </div>
    </>
  );
};
