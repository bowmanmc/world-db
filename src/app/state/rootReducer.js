import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import worldDataReducer from './reducers/worldDataReducer';


const rootReducer = combineReducers({
    routing: routerReducer,
    worldData: worldDataReducer,
});

export default rootReducer;
