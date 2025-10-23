import { Geist, Geist_Mono, Inter, Playfair_Display } from 'next/font/google';
// import { AuthUserProvider } from '@/context/authUserContext';
import { ReduxProvider } from '@/store/ReduxProvider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <AuthUserProvider>{
    <ReduxProvider>{children}</ReduxProvider>
    // }</AuthUserProvider>;
  );
}
