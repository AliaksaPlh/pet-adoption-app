import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './pet-card.module.scss';
import { type PetCardProps } from '@/types/types';

const PetCard: React.FC<PetCardProps> = ({ pet, onClick }) => {
  const t = useTranslations('PetCard');

  return (
    <li className={styles.petCard} onClick={onClick}>
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
      </div>
    </li>
  );
};
export default PetCard;
