import React, { FC } from 'react';
import { Roboto } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { locales, SupportedLocale } from '@/features/i18n';
import { Shell } from '@/shell/Shell';
import { Logo } from '@/ui/Logo';
import '@/ui/main.css';
import { MobileMenuContextProvider } from '@/context';
import { MobileMenu } from '@/ui/MobileMenu';
import { Navigation } from '@/ui/Navigation';

export const metadata = {
  title: 'Aikido Gent - Ban Sen Juku',
  description:
    'Aikido Gent - Ban Sen Juku in Wondelgem (sporthal Neptunus). Training op dinsdag van 20u tot 22u en donderdag van 21u tot 22u30.',
  keywords:
    'aikido, ban sen juku, bansenjuku, go ryu, tomita, budo, dojo, krijgskunst, gevechtsport, gent, wondelgem, belgië, japan, dinsdag, donderdag, tieners, volwassenen',
};

type Props = {
  children?: React.ReactNode;
  params: {
    locale: SupportedLocale;
  };
};

const roboto = Roboto({
  weight: ['300', '500'],
  subsets: ['latin'],
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const RootLayout: FC<Props> = async ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className={roboto.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <MobileMenuContextProvider>
            <Shell>
              <div className="wrapper">
                <header>
                  <Logo type="mobile" />
                  <Navigation />
                </header>
                <div className="page-content">
                  <Logo type="desktop" />
                  {children}
                </div>
                <footer>&copy; 2024 - Ban Sen Juku Go Ryu</footer>
                <MobileMenu />
              </div>
            </Shell>
          </MobileMenuContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
