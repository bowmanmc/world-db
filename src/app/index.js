import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
//import { Provider } from 'react-redux';
//import { Router, browserHistory } from 'react-router';
//import routes from './routes';
//import configureStore from './store/configureStore';
//import { syncHistoryWithStore } from 'react-router-redux';

import Pages from './pages';
import routes from './routes';
//import configureStore from './store/configureStore';

// Import application assets so webpack can process them
require('../favicon.ico');

//const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
//const history = syncHistoryWithStore(browserHistory, store);

// render(
//   <Provider store={store}>
//     <Router history={history} routes={routes} />
//   </Provider>, document.getElementById('app')
// );

ReactDom.render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);
