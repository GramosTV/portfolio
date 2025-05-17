import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'pl'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // and default to `defaultLocale` if it's not.
  const resolvedLocale = locales.includes(locale as any) ? locale : defaultLocale;

  if (!locales.includes(locale as any)) {
    console.warn(`Invalid locale: "${locale}", defaulting to "${resolvedLocale}"`);
  }

  return {
    locale: resolvedLocale,
    messages: (await import(`./messages/${resolvedLocale}.json`)).default,
  };
});
