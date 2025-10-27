import styles from './logo.module.scss';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Logo() {
  const t = useTranslations('Header');
  return (
    <Link href={ROUTES.HOME} className={styles.logo}>
      {/* <Image
        src="/pets.png"
        alt={t('logo')}
        width={35}
        height={35}
        className={styles.logoIcon}
      /> */}
      {t('logo')}
    </Link>
  );
}
