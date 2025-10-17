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
      <div className={styles.contentWrap}>
        <Image src="/pets2.svg" alt="Furry friends" width={307} height={320} />
        <div className={styles.content}>
          <h2 className={styles.title}>{t('mainText')}</h2>
        </div>
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('aboutUsTitle')}</h2>
          <p className={styles.description}>{t('aboutUsText')}</p>
          <p className={styles.description}>{t('aboutUsText2')}</p>
        </div>
        {/* <Image src="/dog1.svg" alt="Furry friends" width={307} height={302} /> */}
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('missionTitle')}</h2>
          <h3 className={styles.description}>{t('mission1')}</h3>
          <h3 className={styles.description}>{t('mission2')}</h3>
          <h3 className={styles.description}>{t('mission3')}</h3>
          <h3 className={styles.description}>{t('mission4')}</h3>
          <h3 className={styles.description}>{t('mission5')}</h3>
        </div>
        <Image
          src="/paws-heart.svg"
          alt="Furry friends"
          width={407}
          height={402}
        />
      </div>
      <div className={styles.contentWrap}>
        <div className={styles.content}>
          <h2 className={styles.title}>{t('unique')}</h2>
        </div>
      </div>{' '}
      <Image
        src="/handUnique.svg"
        alt="Furry friends"
        width={500}
        height={100}
      />
    </section>
  );
}

//  <Image src="/cat-girl.png" alt="Furry friends" width={222} height={320} />;
// <Image src="/dog1.svg" alt="Furry friends" width={307} height={302} />;
