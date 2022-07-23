import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { IPageLimit, IPost, IQuery } from "interfaces";
import { MouseEvent, useState } from "react";
import { range } from "utils";
import styles from './styles.module.scss';

interface IPaginationGroup {
  data?: IPost[],
  pageState: IQuery,
  onChange: (val: IQuery ) => void
  total: number
}

export function PaginationGroup({ pageState, onChange, total }: IPaginationGroup ) {

  const [pageLimit, setPageLimit] = useState<IPageLimit>({
    min: 0,
    max: 5
  });

  const handleCLick = (e: MouseEvent<HTMLElement>) => {

    if ( (e.target as HTMLElement).id === 'prev') {
      if (pageLimit.min <= 1) return;

      setPageLimit({
        min: pageLimit.min - 5,
        max: pageLimit.min
      });

    } else {
      if (pageLimit.max >= total ) return;

      setPageLimit({
        min: pageLimit.max,
        max: pageLimit.max + 5
      });

    }
  };

  const handleClickPaginate = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    onChange({
      ...pageState,
      page: Number((e.target as HTMLButtonElement).value)
    });

  };

  return (
    <div className={ styles.paginationContainer }>
      <Button
        id='prev'
        disabled={ pageLimit.min <= 1 }
        onClick={ handleCLick }
      >
          Назад
      </Button>
      <Pagination
        current={ pageState.page }
        limit={ pageLimit }
        total={ range(1, total) }
        onClick={ handleClickPaginate }
      />
      <Button
        id='next'
        disabled={ pageLimit.max >=  total }
        onClick={ handleCLick }
      >
          Вперед
      </Button>
    </div>
  );
}
