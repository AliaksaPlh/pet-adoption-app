'use client';
import styles from './page.module.scss';
import clsx from 'clsx';
import { type PageProps } from '@/types/types';
// import { useAuthTokenGuard } from '@/hooks/useAuthTokenGuard';

export default function Page({
  children,
  centered,
  skipAuthGuard = false,
}: PageProps) {
  // useAuthTokenGuard({ skipAuthGuard });
  return (
    <main className={clsx(styles.main, centered && styles.centered)}>
      <div className={'container'}>{children}</div>
    </main>
  );
}
