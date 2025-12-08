'use client';

import { useState, useEffect } from 'react';
import styles from './account.module.scss';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import AdoptionForm from '@/components/ui/adoption-form/adoption-form';
import PetOfferForm from '@/components/ui/pet-offer-form/pet-offer-form';
import { useTranslations } from 'next-intl';
import Button from '@/components/ui/button/button';
import { ROUTES } from '@/constants/routes';
import { useRouter } from 'next/navigation';

export default function Account() {
  const [user, loading, error] = useAuthState(auth);
  const t = useTranslations('Account');
  const [isAdoptionFormOpen, setIsAdoptionFormOpen] = useState(false);
  const [isPetOfferFormOpen, setIsPetOfferFormOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (error) return console.error('Authentication error:', error);
    if (!user) {
      router.push(ROUTES.HOME);
    }
  }, [user, loading, error]);

  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>
        {user?.displayName}, {t('title')}
      </h1>
      <br />
      <h2 className={styles.info}> {t('info')}</h2>
      <h2 className={styles.info}> {t('info2')}</h2>
      <h2 className={styles.info} style={{ marginBottom: '2rem' }}>
        {t('info3')}
      </h2>
      <div className={styles.buttonsContainer}>
        <Button
          onClick={() => setIsAdoptionFormOpen(true)}
          variant="primary"
          className={styles.formButton}
        >
          {t('adoptionButton')}
        </Button>
        <Button
          onClick={() => setIsPetOfferFormOpen(true)}
          variant="secondary"
          className={styles.formButton}
        >
          {t('petOfferButton')}
        </Button>
      </div>
      {isAdoptionFormOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsAdoptionFormOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <AdoptionForm onClose={() => setIsAdoptionFormOpen(false)} />
          </div>
        </div>
      )}
      {isPetOfferFormOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => setIsPetOfferFormOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <PetOfferForm onClose={() => setIsPetOfferFormOpen(false)} />
          </div>
        </div>
      )}
    </section>
  );
}
