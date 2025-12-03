import styles from './home-content.module.scss';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function HomeContent() {
  const t = useTranslations('HomePage');
  return (
    <section className={styles.wrapper}>
      <div className={styles.mainTitle}>
        <h1>{t('mainTitle')}</h1>
      </div>
      {/*  */}
      <div className={styles.contentWrap}>
        {/* <Image src="/pets2.svg" alt="Furry friends" width={307} height={320} /> */}

        <Image
          src="/cat-girl.png"
          alt="Furry friends"
          width={222}
          height={320}
        />

        <div className={styles.content}>
          <div className={styles.secondaryTitle}>
            <h2 className={styles.title}>{t('mainText')}</h2>
          </div>
        </div>
      </div>
      {/*  */}
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.secondaryTitle}>
            <h2 className={styles.title}>{t('aboutUsTitle')}</h2>
          </div>
          <h3 className={`${styles.description} ${styles.shadow}`}>
            {t('aboutUsText')}
          </h3>
        </div>
      </div>
      {/*  */}
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <div className={styles.secondaryTitle}>
            <h2 className={styles.title}>{t('missionTitle')}</h2>
          </div>
          <div className={styles.shadow}>
            {[1, 2, 3, 4, 5].map((n) => (
              <h3 key={n} className={styles.description}>
                {t(`mission${n}`)}
              </h3>
            ))}
          </div>
        </div>
        <Image src="/pets3.svg" alt="Furry friends" width={407} height={402} />
      </div>
      <div className={styles.uniqueBlock}>
        <h2 className={styles.title}>{t('unique')}</h2>
        <Image
          src="/handUnique.svg"
          alt="Furry friends"
          width={500}
          height={100}
        />
      </div>
    </section>
  );
}

//  <Image src="/cat-girl.png" alt="Furry friends" width={222} height={320} />;
// <Image src="/dog1.svg" alt="Furry friends" width={307} height={302} />;
