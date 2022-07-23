import styles from './styles.module.scss';

export function Spinner() {
  return (
    <div className={ styles.loaderContainer }>
      <div className={ styles.loader } />
    </div>
  );
}
