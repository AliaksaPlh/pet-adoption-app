'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleFavorite } from '@/store/slice/favoritesSlice';
import { Pet } from '@/types/types';
import PetCard from '@/components/ui/pet-card/pet-card';
import PetCardDetails from '@/components/ui/pet-card-details/pet-card-details';
import styles from './favorites-list.module.scss';
import { useTranslations } from 'next-intl';

const FavoritesList: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const t = useTranslations('Favorites');

  const handleFavorite = (pet: Pet) => {
    dispatch(toggleFavorite(pet));
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>{t('empty')}</p>
      </div>
    );
  }

  return (
    <div>
      <ul
        className={styles.petList}
        style={{ listStyle: 'none', padding: 0, margin: 0 }}
      >
        {favorites.map((pet) => (
          <PetCard key={pet.id} pet={pet} onClick={() => setSelectedPet(pet)} />
        ))}
      </ul>
      {selectedPet && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedPet(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <PetCardDetails
              pet={selectedPet}
              onClose={() => setSelectedPet(null)}
              onfavorite={() => handleFavorite(selectedPet)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
