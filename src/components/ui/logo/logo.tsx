import styles from './logo.module.scss';
import { ROUTES } from '@/constants/routes';
import { useTranslations } from 'next-intl';
import AppLink from '../app-link/app-link';

export default function Logo() {
  const t = useTranslations('Header');
  return (
    <AppLink href={ROUTES.HOME} className={styles.logo}>
      {t('logo')}
    </AppLink>
  );
}
