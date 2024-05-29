import createMiddleware from 'next-intl/middleware';
import {
  defaultLocale,
  localeDetection,
  localePrefix,
  locales,
} from '@/features/i18n';
import { pathnames } from '@/navigation';

export default createMiddleware({
  defaultLocale,
  locales,
  localeDetection,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/(nl|en)/:path*'],
};
