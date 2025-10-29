'use client';

import React, { useState } from 'react';
import styles from './pet-filters.module.scss';
import { FILTERSRU } from '@/constants/filteres';
import { useTranslations } from 'next-intl';
import { type PetFiltersProps } from '@/types/types';
import { Select } from '@/components/ui/selector/select';

export default function PetFilters({ onFilterChange }: PetFiltersProps) {
  const t = useTranslations('PetFilters');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || undefined;
    onFilterChange(value);
  };

  return (
    <div className={styles.selectWrapper}>
      <Select
        id="pet-filter"
        options={FILTERSRU}
        onChange={onFilterChange}
        placeholder={t('select')}
        className={styles.select}
      />
    </div>
  );
}
