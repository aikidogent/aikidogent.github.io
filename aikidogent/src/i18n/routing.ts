import { createNavigation } from 'next-intl/navigation';
import { defineRouting, Pathnames } from 'next-intl/routing';
import {
  defaultLocale,
  localeDetection,
  localePrefix,
  locales,
} from './config';

export const pathnames = {
  '/': '/',
  '/what-is-aikido': {
    nl: '/wat-is-aikido',
    en: '/what-is-aikido',
  },
  '/dojo': {
    nl: '/onze-dojo',
    en: '/our-dojo',
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
} as const satisfies Pathnames<typeof locales>;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localeDetection,
  localePrefix,
  pathnames,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
