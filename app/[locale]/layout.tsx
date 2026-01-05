import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Oswald, Poppins } from 'next/font/google'; 
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import '@/app/globals.css';

// 2. Configure Oswald (Heading)
const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-heading', // tailwind/globals config
  display: 'swap',
});

// 3. Configure Poppins (Body)
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',    // tailwind/globals config
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
      {/* 4. Inject the font variables into the body class */}
      <body className={`${oswald.variable} ${poppins.variable} font-body flex min-h-screen flex-col`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}