import { useTransition } from 'react';
import { useParams } from 'next/navigation';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';

export const LanguageSwitcher = () => {
  const currentLocale = useLocale();
  const router = useRouter();
  const [_, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  const toggleLocale = () => {
    startTransition(() => {
      router.replace(
        // @ts-ignore
        { pathname, params },
        { locale: currentLocale === 'nl' ? 'en' : 'nl' },
      );
    });
  };

  return (
    <a
      href="#"
      className="language_switcher"
      type="button"
      onClick={toggleLocale}
    >
      {currentLocale === 'nl' ? 'English version' : 'Nederlandse versie'}
    </a>
  );
};
