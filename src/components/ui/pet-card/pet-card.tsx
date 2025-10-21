import { Pet } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';
import styles from './pet-card.module.scss';
import { PetCardProps } from '@/types/types';

const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  const t = useTranslations('PetCard');

  return (
    <li className={styles.petCard}>
      <Image src={pet.photo} alt={pet.name} width={100} height={100} />
      <h3>{pet.name}</h3>
      <p>
        <strong>{t('type')}:</strong>
        {pet.type}
        <br />
        <strong>{t('age')}:</strong> {pet.age}
        <br />
        <strong>{t('gender')}:</strong> {pet.gender}
        {/* <br /> */}
        {/* <strong>{t('color')}:</strong> {pet.color} */}
        {/* <br /> */}
        {/* <strong>{t('character')}:</strong> {pet.character} */}
        {/* <br /> */}
        {/* <strong>{t('toilet')}:</strong> {pet.toilet} */}
        {/* <br /> */}
        {/* <strong>{t('foundAt')}:</strong> {pet.foundAt} */}
      </p>
      <p>{/* <strong>{t('history')}:</strong> {pet.history} */}</p>
    </li>
  );
};
export default PetCard;
