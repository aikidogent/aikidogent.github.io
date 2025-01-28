import { getRequestConfig } from 'next-intl/server';
import { defaultLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  const messageModule = (await import(
    `./messages/${locale || defaultLocale}`
  )) as {
    default: Record<string, string>;
  };
  const messages = messageModule.default;

  return {
    locale,
    messages,
  };
});
