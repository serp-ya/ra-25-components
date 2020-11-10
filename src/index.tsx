import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TopMenu } from './components/top-menu';
import { ROUTES } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopMenu routes={ROUTES} />
        <Switch>
          {ROUTES.map(({ Component, path }) => (
            <Route key={path} path={path}>
              <Component />
            </Route>
          ))}
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);