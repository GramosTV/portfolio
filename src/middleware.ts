import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Skip next-intl middleware processing for /api routes and other special paths
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check if the pathname already has a locale
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  // If the pathname already has a locale, we don't need to redirect
  if (pathnameHasLocale) return NextResponse.next();

  // Get the preferred locale from the Accept-Language header if available
  const acceptLanguage = request.headers.get('accept-language');
  let locale = defaultLocale;

  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim())
      .find((lang) => locales.includes(lang.substring(0, 2)));

    if (preferredLocale) {
      locale = preferredLocale.substring(0, 2);
    }
  }

  // Redirect if there is no locale
  request.nextUrl.pathname = `/${locale}${pathname === '/' ? '' : pathname}`;

  // Return a response redirecting to the new pathname
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Match all paths except for:
  // - API routes (/api/...)
  // - Static files (/images/..., /fonts/..., etc.)
  // - Next.js internal routes (/_next/...)
  // - Files with extensions (.css, .js, etc.)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
