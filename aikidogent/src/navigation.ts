import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';
import { localePrefix, locales } from '@/features/i18n';

export const pathnames = {
  '/': '/',
  '/what-is-aikido': {
    nl: '/wat-is-aikido',
    en: '/what-is-aikido',
  },
  '/dojo': {
    nl: '/onze-dojo',
    en: '/dojo',
  },
  '/practical-information': {
    nl: '/praktische-informatie',
    en: '/practical-information',
  },
  '/join-any-time': {
    nl: '/instappen-kan-op-elk-moment',
    en: '/join-any-time',
  },
  '/links': '/links',
  '/news/[id]': {
    nl: '/nieuws/[id]',
    en: '/news/[id]',
  },
  '/tomita-sensei-on-the-essence-of-aikido': {
    nl: '/tomita-sensei-over-de-essentie-van-aikido',
    en: '/tomita-sensei-on-the-essence-of-aikido',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({
    locales,
    localePrefix,
    pathnames: pathnames as typeof pathnames & Record<string & {}, string>,
  });
