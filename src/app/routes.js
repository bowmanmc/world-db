import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Pages from './pages';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Pages.HomePage} />
    <Route path="*" component={Pages.Error404Page} />
  </Route>
);
