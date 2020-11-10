import * as React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TopMenu } from './components/top-menu';
import { ROUTES } from './routes';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <TopMenu routes={ROUTES} />
      <Switch>
        {ROUTES.map(({ component, path }) => (
          <Route component={component} exact key={path} path={path} />
        ))}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);