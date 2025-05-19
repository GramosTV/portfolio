import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css'; // Corrected path
import '../responsive.css'; // Added responsive improvements
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import AnimatedGradientBackground from '@/app/components/AnimatedGradientBackground';
import { locales } from '@/i18n';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikołaj Gramowski - Full Stack Developer',
  description:
    'Personal website of Mikołaj Gramowski, a Full Stack Developer showcasing projects, skills, and experience.',
};

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
  // Safely extract and validate the locale

  const locale = params?.locale || 'en';

  // Get messages for this locale
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
      </body>
    </html>
  );
}
