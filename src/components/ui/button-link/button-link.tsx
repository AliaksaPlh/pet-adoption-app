import Link from 'next/link';
import styles from './button-link.module.scss';
import clsx from 'clsx';
import { type ButtonLinkProps } from '@/types/types';

export default function ButtonLink({
  href,
  children,
  className,
  variant = 'primary',
  scaleOnHover = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={clsx(
        styles.button,
        styles[variant],
        scaleOnHover && styles.scaleOnHover,
        className
      )}
    >
      {children}
    </Link>
  );
}
