import { getRequestConfig, RequestConfig } from 'next-intl/server';

// Define our supported locales
export const locales = ['en', 'pl'];
export const defaultLocale = 'en';

// Create a function to check if a given locale is supported
export function isValidLocale(locale: string): boolean {
  return locales.includes(locale);
}

// This is the configuration for next-intl used in the app/[locale] layout
export default getRequestConfig(async ({ locale }): Promise<RequestConfig> => {
  const currentLocale = locale || defaultLocale;
  // Validate that the incoming locale parameter is valid
  if (!locales.includes(currentLocale)) {
    console.warn(`Invalid locale: "${currentLocale}", falling back to "${defaultLocale}"`);
    // Fall back to default locale with valid messages
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    };
  }

  // Try to load messages for the provided locale
  try {
    return {
      locale: currentLocale,
      messages: (await import(`./messages/${currentLocale}.json`)).default,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${currentLocale}:`, error);
    // Fall back to default locale
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    };
  }
});
