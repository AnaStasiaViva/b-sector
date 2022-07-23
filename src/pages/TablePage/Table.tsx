
import { ErrorMessage, Sorting, TBody, TData, THead, TRow, TTable } from 'components';
import { IPost } from 'interfaces';
import { MouseEvent } from 'react';

interface ITable {
  data: IPost[]
  sort: (e: MouseEvent<HTMLElement>) => void,
}

export function Table({ data, sort }: ITable) {

  return (
    <TTable >
      <THead >
        <TData>
          <Sorting
            id='id'
            name='Id'
            onClick={ sort }
          />
        </TData>

        <TData>
          <Sorting
            id='title'
            name='заголовок'
            onClick={ sort }
          />
        </TData>

        <TData>
          <Sorting
            id='body'
            name='описание'
            onClick={ sort }
          />
        </TData>
      </THead>

      <TBody>

        { data && data.length > 0 ? data.map((item) => (
          <TRow
            key={ item.id }
          >
            <TData>
              {item.id}
            </TData>
            <TData>
              {item.title}
            </TData>
            <TData>
              { item.body }
            </TData>
          </TRow>
        )) : (
            <ErrorMessage message='Нет результатов по вашему запросу' />
        )}
      </TBody>
    </TTable>
  );
}
