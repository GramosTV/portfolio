import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { locales, defaultLocale } from './i18n';
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Skip next-intl middleware processing for /api routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Get the preferred locale, similar to above or using a library
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = defaultLocale; // Or get from accept-language header, cookie, etc.
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl);
}

export const config = {
  // Match only internationalized pathnames
  matcher: [
    // Match all pathnames except for
    // - …
    // - …
    // - …
    '/((?!_next|.*\\..*).*)', // Exclude /_next and files with extensions (e.g. .jpg, .png)
  ],
};
