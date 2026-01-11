import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Oswald, Poppins } from 'next/font/google';
import Navbar from '@/components/b2cSections/Navbar';
import Footer from '@/components/b2cSections/Footer';
import '@/app/globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${oswald.variable} ${poppins.variable} font-body flex min-h-screen flex-col`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <SpeedInsights />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
