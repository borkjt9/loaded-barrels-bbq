import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './index.scss';
import LandingPage from './landing-page/landing-page';
import Menu from './menu/menu';
import './styles/spacing.scss';
import './styles/typography.scss';
import './styles/base.scss';
import './styles/component.scss';
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/home" component={LandingPage} />
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
