'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const currentLocale = useLocale();
  const router = useRouter();
  const currentPathname = usePathname();

  const onSelectChange = (newLocale: string) => {
    // Skip if the locale is already the current one
    if (newLocale === currentLocale) return;

    // Handle path replacement for locale
    const segments = currentPathname.split('/');

    // The first segment after the initial slash is the locale in the [locale] folder structure
    segments[1] = newLocale;

    // Join back into path
    const newPath = segments.join('/');

    // Navigate to the new path with the new locale
    router.push(newPath);
  };
  return (
    <div className="flex items-center space-x-1 sm:space-x-2">
      {(locales as string[]).map((loc) => (
        <button
          key={loc}
          onClick={() => onSelectChange(loc)}
          className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-all duration-200
            ${currentLocale === loc ? 'bg-sky-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
          `}
          aria-label={`Switch language to ${t(loc)}`}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
