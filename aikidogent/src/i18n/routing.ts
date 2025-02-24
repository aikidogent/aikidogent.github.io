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
  '/news/[slug]': {
    nl: '/nieuws/[slug]',
    en: '/news/[slug]',
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
