import { Nunito, Merriweather } from 'next/font/google';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${nunito.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}
