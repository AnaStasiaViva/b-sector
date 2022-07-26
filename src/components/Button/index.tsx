import { HTMLAttributes, MouseEvent } from 'react';
import { join } from 'utils';
import styles from './styles.module.scss';

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  value?: string | number,
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: string;
  color?: string ;
  loading?: boolean;
  className?: string;
  disabled?: boolean
}

export function Button({ children, variant, color, className, ...props }: ButtonProps) {
  return (
    <button
      className={ join(styles.btn, styles[variant!], styles[color!], className) }
      { ...props }
    >
      {children}
    </button>
  );
}
