import {combineReducers, createStore} from 'redux';

import send from './reducers/chat';
import logon from './reducers/login';

const rootReducer = {
    logon, send
}

const store = createStore(combineReducers(rootReducer));

export default store;