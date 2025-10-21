import type { Metadata } from 'next';
// import '@/styles/index.scss';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/header/header';
import { getMessages } from 'next-intl/server';
import ToastProvider from '@/components/providers/toast-provider';

export const metadata: Metadata = {
  title: 'Pet Shelter - Find Your New Best Friend',
  description:
    'Find your new best friend whith the help of our pet helpers comunity. There are so many pets waiting for a loving home.',
  icons: {
    icon: '/pets.svg',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <ToastProvider />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
