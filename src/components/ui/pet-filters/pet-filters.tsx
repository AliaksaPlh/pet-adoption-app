'use client';

import React, { useState } from 'react';
import styles from './pet-filters.module.scss';
import { FILTERSRU } from '@/constants/filteres';
import { useTranslations } from 'next-intl';
import { type PetFiltersProps } from '@/types/types';

export default function PetFilters({ onFilterChange }: PetFiltersProps) {
  const t = useTranslations('PetFilters');
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || undefined;
    onFilterChange(value);
  };

  return (
    <div className={styles.selectWrapper}>
      <select
        id="pet-filter"
        className={styles.select}
        onChange={handleChange}
        defaultValue=""
      >
        <option value="">{t('select')}</option>
        {FILTERSRU.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}
