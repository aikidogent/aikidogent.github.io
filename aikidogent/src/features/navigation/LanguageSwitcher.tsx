import Link from 'next/link';
import type { SupportedLocale } from '../../i18n/config';
import type { TranslationLinks } from './types';

type Props = {
  currentLocale: SupportedLocale;
  translationLinks: TranslationLinks;
};

export const LanguageSwitcher = ({
  currentLocale,
  translationLinks,
}: Props) => (
  <Link
    href={currentLocale === 'nl' ? translationLinks.en : translationLinks.nl}
    className="language_switcher"
    type="button"
  >
    {currentLocale === 'nl' ? 'English version' : 'Nederlandse versie'}
  </Link>
);
