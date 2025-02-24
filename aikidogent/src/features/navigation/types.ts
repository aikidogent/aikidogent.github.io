import type { SupportedLocale } from '@/i18n';

export type LocalizedNavigationData = {
  title: string;
  slug: string;
};

export type NavigationData = Record<SupportedLocale, LocalizedNavigationData[]>;

export type TranslationLinks = {
  nl: string;
  en: string;
};
