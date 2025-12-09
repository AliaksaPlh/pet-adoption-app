import styles from './field-input.module.scss';
import { forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

type FieldInputProps = InputHTMLAttributes<HTMLInputElement> & {
  variant?: 'default' | 'small' | 'form';
};

export const FieldInput = forwardRef<HTMLInputElement, FieldInputProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(styles.input, className, {
          [styles.small]: variant === 'small',
          [styles.form]: variant === 'form',
        })}
        {...props}
      />
    );
  }
);

FieldInput.displayName = 'FieldInput';
