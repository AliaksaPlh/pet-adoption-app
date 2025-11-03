'use client';

import React from 'react';
import styles from './pet-filters.module.scss';
import { FILTERSRU, FILTERSEN } from '@/constants/filteres';
import { useLocale, useTranslations } from 'next-intl';
import { type PetFiltersProps } from '@/types/types';
import { Select } from '@/components/ui/selector/select';

export default function PetFilters({ onFilterChange }: PetFiltersProps) {
  const t = useTranslations('PetFilters');
  const locale = useLocale();
  const options = locale === 'ru' ? FILTERSRU : FILTERSEN;

  return (
    <div className={styles.selectWrapper}>
      <Select
        id="pet-filter"
        options={options}
        onChange={onFilterChange}
        placeholder={t('select')}
        className={styles.select}
      />
    </div>
  );
}
