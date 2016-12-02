import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'whatwg-fetch'; // fetch polyfill for IE - https://github.com/github/fetch

import configureStore from './state/store/configureStore';
import { fetchWorldData } from './state/actions/worldDataActions';
import routes from './routes';


// Import application assets so webpack can process them
require('../favicon.ico');


const store = configureStore();
// Initial data loads
store.dispatch(fetchWorldData());


// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />,
    </Provider>,
    document.getElementById('application')
);
