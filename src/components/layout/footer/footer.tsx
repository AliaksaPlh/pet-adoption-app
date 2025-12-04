import styles from './footer.module.scss';
import Logo from '@/components/ui/logo/logo';
import { ROUTES } from '@/constants/routes';
import { getTranslations } from 'next-intl/server';
import ButtonLink from '@/components/ui/button-link/button-link';

export default async function Footer() {
  const t = await getTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Logo />
          <p className={styles.description}>{t('description')}</p>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>{t('navigation')}</h4>
            <ButtonLink className={styles.footerLink} href={ROUTES.HOME}>
              {t('main')}
            </ButtonLink>
            <ButtonLink className={styles.footerLink} href={ROUTES.PETS}>
              {t('pets')}
            </ButtonLink>
          </div>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>{t('account')}</h4>
            <ButtonLink className={styles.footerLink} href={ROUTES.SIGN_IN}>
              {t('sign-in')}
            </ButtonLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
