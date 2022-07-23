
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { ChangeEvent } from 'react';
import styles from './styles.module.scss';

interface ISearchBar{
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClick: (value: string) => void
}

export function SearchBar({ value, onChange, onClick}: ISearchBar) {

  return (
    <div className={ styles.searchContainer }>
      <Input
        placeholder="Поиск"
        value={ value }
        onChange={ onChange }
      />
      <Button
        variant='search'
        disabled={ value === '' && true }
        onClick={ () =>  onClick(value) }
      />
    </div>
  );
}
