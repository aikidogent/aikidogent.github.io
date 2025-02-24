'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useMobileMenu } from '@/context';
import { LanguageSwitcher } from '@/features/navigation/LanguageSwitcher';
import type { SupportedLocale } from '@/i18n';
import { navData } from './data';
import type { TranslationLinks } from './types';

type Props = {
  currentLocale: SupportedLocale;
  translationLinks: TranslationLinks;
};

export const MobileMenu = ({ currentLocale, translationLinks }: Props) => {
  const t = useTranslations();
  const { open, setOpen } = useMobileMenu();
  const pathname = usePathname();

  return (
    <>
      <div className={`mobile-menu-backdrop ${open ? 'open' : 'closed'}`} />
      <div className={`mobile-menu ${open ? 'open' : 'closed'}`}>
        <ul>
          <li>
            {pathname === `/${currentLocale}` ? (
              <span className="active">{t('homepage.title')}</span>
            ) : (
              <Link
                href={`/${currentLocale}`}
                title={t('homepage.title')}
                target="_self"
                onClick={() => setOpen(false)}
              >
                {t('homepage.title')}
              </Link>
            )}
          </li>
          {navData[currentLocale].map((item) => (
            <li key={item.slug}>
              {pathname === `/${currentLocale}/${item.slug}` ? (
                <span className="active">{item.title}</span>
              ) : (
                <Link
                  href={item.slug}
                  title={item.title}
                  target="_self"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          {/* <li>
            <span className="divider" />
          </li> */}
          <li>
            <LanguageSwitcher
              currentLocale={currentLocale}
              translationLinks={translationLinks}
            />
          </li>
        </ul>
      </div>
    </>
  );
};
