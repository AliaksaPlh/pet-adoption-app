'use client';
import { useState, useEffect } from 'react';
import styles from './pets.module.scss';
import Page from '@/components/layout/page/page';
import Image from 'next/image';
import PetList from '@/components/ui/pet-list/pet-list';

export default function Pets() {
  const [lang, setLang] = useState<'en' | 'ru'>('en');
  return (
    <Page>
      <section className={styles.wrapper}>
        <div className={styles.langSwitch}>
          {[
            { code: 'en', flag: '/en.svg', label: 'English' },
            { code: 'ru', flag: '/ru.svg', label: 'Русский' },
          ].map(({ code, flag, label }) => (
            <div
              key={code}
              onClick={() => setLang(code as 'en' | 'ru')}
              className={`${styles.link} ${
                lang === code ? styles.active : styles.inactive
              }`}
              style={{ cursor: 'pointer' }}
            >
              <div className={styles.imageWrapper}>
                <Image className={styles.image} src={flag} alt={label} fill />
              </div>
            </div>
          ))}
        </div>
        <PetList language={lang} />
      </section>
    </Page>
  );
}
