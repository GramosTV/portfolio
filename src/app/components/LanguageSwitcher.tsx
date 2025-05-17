'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation'; // Corrected import
import { locales } from '@/i18n';

export default function LanguageSwitcher() {
  const t = useTranslations('LanguageSwitcher');
  const currentLocale = useLocale();
  const router = useRouter();
  const currentPathname = usePathname(); // Renamed to avoid confusion

  const onSelectChange = (newLocale: string) => {
    // Construct the new pathname by removing the current locale prefix (if present)
    // and then prepending the new locale.
    let basePath = currentPathname;
    if (basePath.startsWith(`/${currentLocale}`)) {
      basePath = basePath.substring(currentLocale.length + 1) || '/';
    }
    // Ensure basePath starts with a slash if it's not just "/"
    if (basePath !== '/' && !basePath.startsWith('/')) {
      basePath = `/${basePath}`;
    }

    let newPath = `/${newLocale}${basePath === '/' ? '' : basePath}`;

    // Normalize: remove trailing slash if it's not the root of the site (e.g. /pl/ -> /pl)
    if (newPath.length > 1 && newPath.endsWith('/') && newPath !== `/${newLocale}/`) {
      newPath = newPath.slice(0, -1);
    }
    // Special case for root: /en/ should become /en, not /en/
    if (basePath === '/' && newPath.endsWith('/') && newPath.length > `/${newLocale}`.length) {
      newPath = `/${newLocale}`;
    }

    // Only navigate if the new path is different or locale changes
    if (newPath !== currentPathname || newLocale !== currentLocale) {
      router.replace(newPath);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {(locales as string[]).map((loc) => (
        <button
          key={loc}
          onClick={() => onSelectChange(loc)}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
            ${currentLocale === loc ? 'bg-sky-500 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
          `}
        >
          {t(loc)}
        </button>
      ))}
    </div>
  );
}
