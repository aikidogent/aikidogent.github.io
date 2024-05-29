import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales, SupportedLocale } from '@/features/i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as SupportedLocale)) return notFound();

  const messageModule = (await import(
    `./features/i18n/messages/${locale}.ts`
  )) as { default: Record<string, string> };
  const messages = messageModule.default;

  return {
    messages,
  };
});
