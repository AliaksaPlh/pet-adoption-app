'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { Pet } from '@/types/types';
import Button from '@/components/ui/button/button';
import styles from '@/components/ui/button/button.module.scss';

interface FavoriteButtonProps {
  pet: Pet;
  onFavorite?: () => void;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ pet, onFavorite }) => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.favorites
  );
  const isFavorite = favorites.some((fav) => fav.id === pet.id);

  return (
    <Button
      onClick={onFavorite}
      className={`${styles.favBtn} ${styles.primaty}`}
    >
      {isFavorite ? ' 💛' : '🤍'}
    </Button>
  );
};

export default FavoriteButton;
