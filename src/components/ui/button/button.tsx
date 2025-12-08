import clsx from 'clsx';
import styles from './button.module.scss';
import { type ButtonProps } from '@/types/types';

export default function Button({
  children,
  className,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled,
  isLoading,
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, styles[variant], className)}
      style={style}
    >
      {isLoading ? <span className={styles.spinner} /> : children}
    </button>
  );
}
