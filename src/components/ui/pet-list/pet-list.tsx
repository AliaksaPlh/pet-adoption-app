// src/components/PetList.tsx
import React from 'react';
import petsEn from '@/pets/pets.en.json';
import petsRu from '@/pets/pets.ru.json';
import { Pet, PetListProps } from '@/types/types';
import PetCard from '@/components/ui/pet-card/pet-card';
import styles from './pet-list.module.scss';

const PetList: React.FC<PetListProps> = ({ language }) => {
  const pets: Pet[] = language === 'en' ? petsEn : petsRu;

  return (
    <ul className={styles.petList}>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </ul>
  );
};

export default PetList;
