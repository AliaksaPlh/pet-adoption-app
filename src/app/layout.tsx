// import { AuthUserProvider } from '@/context/authUserContext';
import { ReduxProvider } from '@/store/ReduxProvider';

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
