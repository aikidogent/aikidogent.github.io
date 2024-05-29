export const locales = ['nl', 'en'] as const;
export type SupportedLocale = (typeof locales)[number];
export const defaultLocale: SupportedLocale = 'nl';
export const localeDetection = false;
export const localePrefix = 'always'; // Default
