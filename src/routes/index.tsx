import App from 'App';
import { NotFoundPage } from 'pages/404';
import { TablePage } from 'pages/TablePage';
import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route
          path="/"
          element={ <App /> }
        >
          <Route
            element={ <TablePage /> }
            index
          />
          <Route
            path="*"
            element={ <NotFoundPage /> }
          />
        </Route>
      </Router>
    </BrowserRouter>
  );
}