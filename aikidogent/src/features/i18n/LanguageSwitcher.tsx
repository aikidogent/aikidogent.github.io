import { FC, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { Link, usePathname, useRouter } from '@/navigation';

type Props = {};

export const LanguageSwitcher: FC<Props> = ({}) => {
  const currentLocale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  const toggleLocale = () => {
    startTransition(() => {
      router.replace(
        { pathname },
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
