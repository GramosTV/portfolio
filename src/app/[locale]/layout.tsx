import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css'; // Corrected path
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import AnimatedGradientBackground from '@/app/components/AnimatedGradientBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikołaj Gramowski - Full Stack Developer',
  description:
    'Personal website of Mikołaj Gramowski, a Full Stack Developer showcasing projects, skills, and experience.',
};

export default async function RootLayout(props: { children: React.ReactNode; params: { locale: string } }) {
  const { children, params } = props;
  const locale = params.locale;
  const messages = await getMessages({ locale: locale }); // Explicitly pass locale

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-800 antialiased relative`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {' '}
          {/* Pass locale to provider */}
          <AnimatedGradientBackground />
          <div className="relative z-10">
            {' '}
            {/* Content wrapper */}
            <Header />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
