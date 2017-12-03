import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import {createStore} from 'redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import AppContainer from './AppContainer'
import reducers from '../reducers';

let initialState = {
    count: 0,
    people: [
        {id: 123, firstName: 'Bart', lastName: 'Simpson', occupation: 'Student'},
        {id: 234, firstName: 'Otto', lastName: '', occupation: 'Bus Driver'},
        {id: 345, firstName: 'Homer', lastName: 'Simpson', occupation: 'Dad'},
        {id: 456, firstName: 'Marge', lastName: 'Simpson', occupation: 'Mom'},
        {id: 567, firstName: 'Maggie', lastName: 'Simpson', occupation: 'Baby'},
        {id: 678, firstName: 'Lisa', lastName: 'Simpson', occupation: 'Good Student'}
    ],
    places: [
        {id: 9, name: 'Moe\'s Tavern'},
        {id: 3, name: 'Home'},
        {id: 4, name: 'Springfield Elementary'},
        {id: 5, name: 'Nuclear Power Plant'},
    ]
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<AppContainer store={store}/>, node1);
}