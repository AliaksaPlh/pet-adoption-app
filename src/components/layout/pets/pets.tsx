'use client';

import styles from './pets.module.scss';
import Page from '@/components/layout/page/page';
import PetList from '@/components/ui/pet-list/pet-list';
import { useLanguage } from '@/context/languageContext';

export default function Pets() {
  const { language, setLanguage } = useLanguage();

  return (
    <Page>
      <section className={styles.wrapper}>
        <PetList language={language} />
      </section>
    </Page>
  );
}
