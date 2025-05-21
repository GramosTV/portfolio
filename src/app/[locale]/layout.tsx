import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css'; // Corrected path
import '../responsive.css'; // Added responsive improvements
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { NextIntlClientProvider, useMessages } from 'next-intl'; // Import useMessages
import { getMessages, getTranslations } from 'next-intl/server'; // Import getTranslations
import AnimatedGradientBackground from '@/app/components/AnimatedGradientBackground';
import { locales } from '@/i18n';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'] });

// Generate metadata dynamically based on locale
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'PageContent' });

  return {
    title: t('metadataTitle'),
    description: t('metadataDescription'),
    keywords: t('metadataKeywords'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      type: 'website',
      locale: locale,
      siteName: t('ogSiteName'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
    },
  };
}

// Generate static params for all supported locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params?.locale || 'en';
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased relative`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AnimatedGradientBackground />
          <div className="relative z-10">
            <Header />
            <main className="min-h-screen pt-[74px]">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
