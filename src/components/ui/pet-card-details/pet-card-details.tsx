import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './pet-card-details.module.scss';
import { PetCardDetailsProps } from '@/types/types';
import Button from '@/components/ui/button/button';

const PetCardDetails: React.FC<PetCardDetailsProps> = ({ pet, onClose }) => {
  const t = useTranslations('PetCard');

  return (
    <div className={styles.petCard}>
      <div className={styles.buttons}>
        <Button
          onClick={onClose}
          className={`${styles.closeBtn} ${styles.primaty}`}
        >
          ♡
        </Button>
        <Button
          onClick={onClose}
          className={`${styles.closeBtn} ${styles.primaty}`}
        >
          ✘
        </Button>
      </div>
      <Image
        className={styles.petPhoto}
        src={pet.photo}
        alt={pet.name}
        width={250}
        height={200}
      />
      <h3 className={styles.petName}>{pet.name}</h3>
      <div className={styles.shortInfoBlock}>
        <p>{pet.type}</p>
        <p>{pet.age}</p>
        <p>{pet.gender}</p>
        <p>{pet.character}</p>
        <p>{pet.medicalNeeds}</p>
        <p>{pet.toilet}</p>
        <p>{pet.shelter}</p>
      </div>
    </div>
  );
};
export default PetCardDetails;
