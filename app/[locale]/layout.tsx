import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // ✅ Fix: Type it as a Promise
}) {
  // ✅ Fix: Await the params before using them
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body>{/* ... provider code ... */}</body>
    </html>
  );
}
