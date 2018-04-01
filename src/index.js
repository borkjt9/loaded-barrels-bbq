import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './index.scss';
import App from './App';
import Menu from './menu/menu';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/home" component={App} />
        <Route path="/menu" component={Menu} />
        <Route
          path="/"
          render={() => (
            <Redirect to="/home" />
        )}
      />
      </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'),
);
