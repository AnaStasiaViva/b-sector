import styles from './styles.module.scss';

interface TRowProps extends React.HTMLAttributes<HTMLElement> {
  variant?: string
}

export function TRow({ children }:TRowProps ) {
  return (
    <tr className={ styles.tableRow } >
      {children}
    </tr>
  );
}
