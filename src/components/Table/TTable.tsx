import styles from './styles.module.scss';

interface TTableProps extends React.HTMLAttributes<HTMLElement> {
  variant?: string
}

export function TTable({ children }: TTableProps) {
  return (
    <div className={ styles.table }>
      <table>
        { children }
      </table>
    </div>
  );
}
