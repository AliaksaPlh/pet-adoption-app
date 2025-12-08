'use client';

import styles from './selector.module.scss';
import { SelectProps } from '@/types/types';

export const Select: React.FC<SelectProps> = ({
  id,
  options,
  defaultValue = '',
  onChange,
  placeholder = 'Select...',
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || undefined;
    onChange(value);
  };

  return (
    <select
      id={id}
      className={`${styles.select} ${className ?? ''}`}
      onChange={handleChange}
      defaultValue={defaultValue}
    >
      <option value="">{placeholder}</option>
      {options.map(({ label, value }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};
