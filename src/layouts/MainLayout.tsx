import styles from './styles.module.scss';

interface IMainLayout extends React.HTMLAttributes<HTMLElement> {}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div className={ styles.container } >
      { children}
    </div>
  );
}
