import { InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { join } from '../../utils/';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ ...props }: InputProps ) {
  return (
    <input
      className={ join(styles.input) }
      { ...props }
    />
  );
}