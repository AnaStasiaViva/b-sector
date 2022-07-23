import styles from './styles.module.scss';

interface IErrorMessage {
  message: string
}

export function ErrorMessage({ message }: IErrorMessage) {
  return (
    <div className={ styles.error }>
      <span >
        { message}
      </span>
    </div>
  );
}
