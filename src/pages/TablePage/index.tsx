import styles from './styles.module.scss';
import { ErrorMessage } from 'components';
import { Button } from 'components/Button';
import { SearchBar } from 'components/SearchBar';
import { Spinner } from 'components/Spinner';
import { useDebounce } from 'hooks/useDebounce';
import { IPost, IQuery, SortOrder } from 'interfaces';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { postsApi } from 'services/PostService';
import { sortByLetters, sortByNumber } from 'utils';
import { Table } from './Table';
import PaginationGroup from './PaginationGroup';

export function TablePage() {

  const [state, setState] = useState<IQuery>({
    limit: 10,
    page: 1,
  });

  const { data: posts, isLoading, error } = postsApi.useFetchPostsByPageQuery(state);
  const { data: postsAll } = postsApi.useFetchPostsQuery('');

  const [searchValues, setSearchValues] = useState<IPost[]>([]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [sortOrder, setSortOrder] = useState<SortOrder>('asn');

  const debouncedSearchValue = useDebounce(searchValue, 500);

  const handleSearch = (value: string) => {
    setSearchActive(true);

    setState((prev) => ({
      ...prev,
      page: 1
    }));

    const newSearch = postsAll && [...postsAll];
    const res = newSearch?.filter(post => post.title.includes(value));
    if (res) setSearchValues(res);
  };

  const handleClearSearch = () => {
    setSearchActive(false);
    setSearchValue('');
    if(posts) setSearchValues(posts);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const sortedData = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSearchActive(true);

    setState((prev) => ({
      ...prev,
      page: 1
    }));

    const sortingKey = (e.target as HTMLElement).id;
    const sorted = searchValue !== '' && searchValues.length > 0
      ? [...searchValues]
      : (postsAll && [...postsAll]);
    const final = [];

    if (sorted && sorted.length > 0) {
      let result;
      sortingKey === 'id'
        ? result = sortByNumber(sorted, sortingKey, sortOrder)
        : result = sortByLetters(sorted, sortingKey, sortOrder);
      final.push(...result);
    }

    setSearchValues(final);
    sortOrder === 'asn' ? setSortOrder('desc') : setSortOrder('asn');

    return final;
  };


  const paginationTotalCount = searchActive && postsAll
    ? (1)
    : (postsAll ? Math.ceil(postsAll.length / state.limit) : 1);


  useEffect(() => {
    if(debouncedSearchValue !== '') handleSearch(debouncedSearchValue);
  }, [debouncedSearchValue]);


  return (
    <div className={ styles.tableContainer }>
      {isLoading ? <Spinner />:
        (<>
          <div
            className={ styles.tableWrap }
          >
            <div className={ styles.searchGroup }>
              <SearchBar
                value={  searchValue  }
                onChange={ handleChange }
                onClick={ handleSearch }
              />
              <Button onClick={ handleClearSearch } > Очистить</Button>
            </div>

            <Table
              sort={ sortedData }
              data={ searchActive ? searchValues : (posts || []) }
            />
          </div>

          <PaginationGroup
            pageState={ state }
            total={ paginationTotalCount }
            data={ searchActive ? searchValues :  (posts || []) }
            onChange={ setState }
          />
         </>)
      }
      {error && (<ErrorMessage message='Произошла ошибка..' /> )}
    </div>
  );
}
