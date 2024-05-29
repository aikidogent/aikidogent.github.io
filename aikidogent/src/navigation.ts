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
  '/links': '/links',
  '/news/[id]': {
    nl: '/nieuws/[id]',
    en: '/news/[id]',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
