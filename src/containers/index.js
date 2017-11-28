import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import {createStore} from 'redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import AppContainer from './AppContainer'
import reducer from '../reducers/counterReducer';


let initialState = { count: 0 };

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<AppContainer store={store}/>, node1);
}