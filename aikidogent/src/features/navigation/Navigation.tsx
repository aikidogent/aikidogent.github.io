'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { SupportedLocale } from '@/i18n';
import { Hamburger } from '@/ui/Hamburger';
import { navData } from './data';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { TranslationLinks } from './types';

type Props = {
  currentLocale: SupportedLocale;
  translationLinks: TranslationLinks;
};

export const Navigation = ({ currentLocale, translationLinks }: Props) => {
  const pathname = usePathname();

  return (
    <>
      <nav>
        <ul>
          {navData[currentLocale].map((item) => (
            <li key={item.slug}>
              {pathname === `/${currentLocale}/${item.slug}` ? (
                <span className="active">{item.title}</span>
              ) : (
                <Link href={item.slug} title={item.title} target="_self">
                  {item.title}
                </Link>
              )}
            </li>
          ))}
          <li>
            <span className="divider" />
          </li>
          <li>
            <LanguageSwitcher
              currentLocale={currentLocale}
              translationLinks={translationLinks}
            />
          </li>
        </ul>
      </nav>
      <Hamburger />
    </>
  );
};
