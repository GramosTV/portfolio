import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Define our supported locales
export const locales = ['en', 'pl'];
export const defaultLocale = 'en';

// Create a function to check if a given locale is supported
export function isValidLocale(locale: string): boolean {
  return locales.includes(locale);
}

// This is the configuration for next-intl used in the app/[locale] layout
export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming locale parameter is valid
  if (!locales.includes(locale as any)) {
    console.warn(`Invalid locale: "${locale}", falling back to "${defaultLocale}"`);
    // Fall back to default locale with valid messages
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    };
  }

  // Try to load messages for the provided locale
  try {
    return {
      locale,
      messages: (await import(`./messages/${locale}.json`)).default,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    // Fall back to default locale
    return {
      locale: defaultLocale,
      messages: (await import(`./messages/${defaultLocale}.json`)).default,
    };
  }
});
