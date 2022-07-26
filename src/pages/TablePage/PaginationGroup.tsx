import { Button } from "components/Button";
import { Pagination } from "components/Pagination";
import { IPageLimit, IPost, IQuery } from "interfaces";
import { memo, MouseEvent, useMemo, useState } from "react";
import { range } from "utils";
import styles from './styles.module.scss';

type paginationVal = 'incr' | 'decr';

interface IPaginationGroup {
  data?: IPost[],
  pageState: IQuery,
  onChange: (val: IQuery ) => void
  total: number
}
function PaginationGroup({ pageState, onChange, total }: IPaginationGroup) {

  const [pageLimit, setPageLimit] = useState<IPageLimit>({
    min: 1,
    max: 5
  });

  let rangeCount = useMemo(() => (range(pageLimit.min, (total < pageLimit.max ? total : pageLimit.max))), [total, pageLimit]);

  const handleCount = (val: paginationVal) => {

    val === 'incr'
      ? setPageLimit((prev) => ({
          min: prev.min + 1,
          max: prev.max
      }))
      : setPageLimit((prev) => ({
          min: prev.min - 1,
          max: prev.max
    }));

    rangeCount = (range(pageLimit.min, (total < pageLimit.max ? total : pageLimit.max)));

   };

   const handleCLick = (e: MouseEvent<HTMLElement>) => {
     e.preventDefault();
     if (!e.target ) return;
     const idx = (e.target as HTMLElement).id;
     idx === 'prev' ? handleCount('decr') : handleCount('incr');

     onChange({
      ...pageState,
      page: idx === 'prev' ? pageState.page - 1 : pageState.page + 1
    });
   };


  const handleClickPaginate = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();

    if (!(e.target as HTMLButtonElement)) return;
    const val = (e.target as HTMLButtonElement).value;

    Number(val) > rangeCount[0] && Number(val) < total && rangeCount[rangeCount.length - 1] < total
      ? handleCount('incr')
      : (Number(val) === rangeCount[0] && Number(val) > 1
        && handleCount('decr'));

    if (Number(pageState.page) === Number(val)) return;

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
        total={ rangeCount.length > 1 ? rangeCount : [1] }
        onClick={ handleClickPaginate }
      />
      <Button
        id='next'
        disabled={ rangeCount[rangeCount.length - 1] >= total }
        onClick={ handleCLick }
      >
          Вперед
      </Button>
    </div>
  );
}

export default memo(PaginationGroup);
