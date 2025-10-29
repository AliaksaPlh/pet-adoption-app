'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useGetPetByNameQuery } from '@/store/slice/petsApi';
import { useTranslations } from 'next-intl';
import styles from './pet.module.scss';
import CircleLoader from '@/components/ui/circle-loader/circle-loader';
import { type Pet } from '@/types/types';
import { petFields } from '@/constants/consts';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

import ButtonLink from '@/components/ui/button-link/button-link';

export default function Pet() {
  const { name, locale } = useParams() as { name: string; locale: string };
  const t = useTranslations('PetCard');
  const {
    data: pet,
    isLoading,
    isError,
  } = useGetPetByNameQuery({
    name: decodeURIComponent(name),
    lang: locale,
  });

  useEffect(() => {
    if (isError) {
      toast.error(t('notFound'));
    }
  }, [isError, t]);

  if (isLoading) return <CircleLoader />;
  if (isError || !pet)
    return (
      <div className={styles.petCard}>
        <h1 className={styles.name}>{t('notFound')}</h1>
      </div>
    );

  return (
    <div className={styles.petCard}>
      <div className={styles.photoWrapper}>
        <Image
          src={pet.photo}
          alt={pet.name}
          width={400}
          height={280}
          className={styles.photo}
        />
        {pet.history && <p>{pet.history}</p>}
      </div>
      <div className={styles.details}>
        <h1 className={styles.name}>{pet.name}</h1>
        <div className={styles.infoGrid}>
          {petFields.map(({ key, label }) => {
            const value = pet[key as keyof Pet];
            if (!value) return null;
            return (
              <div key={key} className={styles.infoItem}>
                <span className={styles.label}>{label}:</span> {value}
              </div>
            );
          })}
        </div>
        <ButtonLink
          className={styles.btnlink}
          variant={'secondary'}
          href={pet.linkToPlatform as string}
        >
          {t('link')}
        </ButtonLink>
      </div>
    </div>
  );
}
