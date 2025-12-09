'use client';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFavorite } from '@/store/slice/favoritesSlice';
import { Pet } from '@/types/types';
import Button from '@/components/ui/button/button';
import styles from '@/components/ui/button/button.module.scss';

interface RemoveFavoriteButtonProps {
  pet: Pet;
  className?: string;
}

const RemoveFavoriteButton: React.FC<RemoveFavoriteButtonProps> = ({
  pet,
  className,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFavorite(pet.id));
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <Button
        onClick={handleRemove}
        className={className}
        variant="closeButton"
      >
        ✕
      </Button>
    </div>
  );
};

export default RemoveFavoriteButton;
