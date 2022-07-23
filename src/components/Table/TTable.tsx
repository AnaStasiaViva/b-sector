import styles from './styles.module.scss';

interface TTableProps extends React.HTMLAttributes<HTMLElement> {}

export function TTable({ children }: TTableProps) {
  return (
    <table className={ styles.table }>
      { children }
    </table>
  );
}
