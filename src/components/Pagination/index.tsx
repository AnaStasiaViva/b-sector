
import { IPageLimit } from "interfaces";
import { MouseEvent } from "react";
import { PaginationItem } from "./PaginationItem";
import styles from './styles.module.scss';

interface IPagination {
  onClick: (e: MouseEvent<HTMLElement>) => void,
  current: number,
  limit: IPageLimit
  total: number[]
}

export function Pagination({ onClick, current, limit, total }: IPagination) {

  return (
    <div className={ styles.paginationWrapper }>
      {total && total.length > 1 && total.map(page => {
        if (page < limit.max + 1 && page > limit.min) {
          return (
            <PaginationItem
              key={ page }
              count={ page }
              variant={ current === page? 'active': '' }
              onClick={ (e) =>  onClick(e) }
            />
           );
         }
      })}
    </div>
  );
}
