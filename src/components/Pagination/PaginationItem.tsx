import styles from './styles.module.scss';
import { join } from 'utils';
import { Button } from 'components/Button';
import { MouseEvent } from 'react';

interface IPaginationItem {
  count: number,
  variant?: string,
  onClick: (e: MouseEvent<HTMLElement>) => void
}

export function PaginationItem({ count, variant, ...props }: IPaginationItem) {
  return (
    <div className={ styles.paginationItem }>
      <Button
        value={ count }
        className={ variant ? join(styles.common, styles[variant]) : styles.common }
        { ...props }
      >
      { count }
      </Button>
    </div>
  );
}
