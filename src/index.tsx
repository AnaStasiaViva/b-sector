import ReactDOM from 'react-dom/client';
import 'assets/styles/styles.scss';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { Routes } from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={ store }>
    <Routes />
  </Provider>
);
