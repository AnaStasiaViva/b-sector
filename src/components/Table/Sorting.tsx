import { MouseEvent, useRef } from 'react';
import styles from './styles.module.scss';
import Img from 'assets/images/arrow.svg';
import { useOpen } from 'hooks/useOpen';

interface ISorting {
  onClick: (e: MouseEvent<HTMLElement>) => void
  id: string
  name: string
}

export function Sorting({ onClick, id, name }: ISorting) {

  const ref = useRef<HTMLDivElement>(null);
  const [isOpen] = useOpen(ref);

  return (
    <div
      className={ styles.sorting }
      ref={ ref }
      onClick={ onClick }
    >
      <span>
        {name}
      </span>
      <img
        src={ Img }
        alt={ id }
        id={ id }
        className={ isOpen ? styles.rotate : '' }
      />
    </div>
  );
}
