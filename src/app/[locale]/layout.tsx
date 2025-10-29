import type { Metadata } from 'next';
import '@/styles/index.scss';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/header/header';
import { getMessages } from 'next-intl/server';
import ToastProvider from '@/components/providers/toast-provider';
import { Nunito, Merriweather } from 'next/font/google';
import { LanguageProvider } from '@/context/languageContext';
import { type Language } from '@/types/types';

const nunito = Nunito({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-nunito',
  display: 'swap',
});

const merriweather = Merriweather({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-merriweather',
  weight: ['400', '700'],
  display: 'swap',
});

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
    <html
      lang={locale}
      className={`${nunito.variable} ${merriweather.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <LanguageProvider initialLanguage={locale as Language}>
            <Header />
            {children}
            <ToastProvider />
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
