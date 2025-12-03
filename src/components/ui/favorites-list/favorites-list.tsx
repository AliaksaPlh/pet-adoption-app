'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleFavorite } from '@/store/slice/favoritesSlice';
import { Pet } from '@/types/types';
import PetCard from '@/components/ui/pet-card/pet-card';
import PetCardDetails from '@/components/ui/pet-card-details/pet-card-details';
import RemoveFavoriteButton from '@/components/ui/button-fav/remove-favorite-button';
import styles from './favorites-list.module.scss';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/routes';
import ButtonLink from '@/components/ui/button-link/button-link';

const FavoritesList: React.FC = () => {
  const [selectedPet, setSelectedPet] = useState<Pet | null>(null);
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const t = useTranslations('Favorites');
  const router = useRouter();

  const handleFavorite = (pet: Pet) => {
    dispatch(toggleFavorite(pet));
  };

  if (favorites.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>{t('empty')}</p>
        <br />
        <ButtonLink href={ROUTES.PETS} className={styles.link}>
          {t('petsLinkText')}
        </ButtonLink>
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
          <li key={pet.id} className={styles.petCardWrapper}>
            <PetCard pet={pet} onClick={() => setSelectedPet(pet)} />
            <RemoveFavoriteButton pet={pet} className={styles.removeBtn} />
          </li>
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
