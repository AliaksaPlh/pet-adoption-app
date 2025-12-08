'use client';

import styles from './header.module.scss';
import Logo from '@/components/ui/logo/logo';
import { ROUTES } from '@/constants/routes';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/ui/language-switcher/language-switcher';
import { useIsScrolled } from '@/hooks/use-is-scrolled';
import ButtonLink from '@/components/ui/button-link/button-link';
import Button from '@/components/ui/button/button';
import { logout, auth } from '@/firebase/firebase';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import ThemeButton from '@/components/ui/theme/theme';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import Image from 'next/image';

export default function Header() {
  const isScrolled = useIsScrolled();
  const t = useTranslations('Header');
  const router = useRouter();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const hasFavorites = favorites.length > 0;

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogOut = async () => {
    logout();
    router.push(ROUTES.HOME);
  };

  if (isLoading) {
    <header className={clsx(styles.header, { [styles.sticky]: isScrolled })}>
      <div className={styles.headerWrapper}>
        <Logo />
        <div className={styles.nav}>
          <LanguageSwitcher />
        </div>
      </div>
    </header>;
  }

  return (
    <header className={clsx(styles.header, { [styles.sticky]: isScrolled })}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <ThemeButton />
          <Logo />
        </div>
        <div className={styles.nav}>
          {hasFavorites && (
            <ButtonLink
              className={styles.navLink}
              variant={'secondary'}
              href={ROUTES.FAVORITES}
              style={{
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 10px rgb(0, 0, 0, 10%)',
              }}
            >
              💛
            </ButtonLink>
          )}
          <LanguageSwitcher />

          <ButtonLink
            className={styles.navLink}
            variant={'primary'}
            href={ROUTES.PETS}
            style={{
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              border: 'none',
              borderRadius: '50%',
            }}
          >
            <Image
              src="/pet.png"
              alt={t('pets')}
              width={24}
              height={24}
              className={styles.accountImg}
            />
          </ButtonLink>
          <ButtonLink
            className={styles.navLink}
            href={ROUTES.HOME}
            style={{
              padding: '12px 12px',
              display: 'flex',
              alignItems: 'center',
              border: 'none',
              borderRadius: '50%',
            }}
          >
            <Image
              src="/home.png"
              alt={t('main')}
              width={24}
              height={24}
              className={styles.accountImg}
            />
          </ButtonLink>
          {user ? (
            <>
              <ButtonLink
                className={styles.navLink}
                href={ROUTES.ACCOUNT}
                style={{
                  padding: '12px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  border: 'none',
                  borderRadius: '50%',
                }}
              >
                <Image
                  src="/people.png"
                  alt={t('account')}
                  width={24}
                  height={24}
                  className={styles.accountImg}
                />
              </ButtonLink>
              <Button
                variant={'secondary'}
                className={styles.navLink}
                onClick={handleLogOut}
                style={{
                  padding: '12px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  border: 'none',
                  borderRadius: '50%',
                }}
              >
                <Image
                  src="/logout.png"
                  alt={t('sign-out')}
                  width={24}
                  height={24}
                  className={styles.accountImg}
                />
              </Button>
            </>
          ) : (
            <>
              <ButtonLink
                className={styles.navLink}
                variant={'secondary'}
                href={ROUTES.SIGN_IN}
                style={{
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 2px 10px rgb(0, 0, 0, 10%)',
                }}
              >
                {t('sign-in')}
              </ButtonLink>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
