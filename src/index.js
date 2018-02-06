import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import {createStore} from 'redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import App from './App'
import reducers from './reducers';

let initialState = {
    people: [
        {firstName: 'Bart', lastName: 'Starr', occupation: 'Student'},
        {firstName: 'Otto', lastName: '', occupation: 'Bus Driver'},
        {firstName: 'Homer', lastName: 'Starr', occupation: 'Dad'},
        {firstName: 'Marge', lastName: 'Starr', occupation: 'Mom'},
        {firstName: 'Maggie', lastName: 'Starr', occupation: 'Baby'},
        {firstName: 'Lisa', lastName: 'Starr', occupation: 'Good Student'}
    ],
    places: [
        {name: 'Moe\'s Tavern'},
        {name: 'Home'},
        {name: 'Starrfield Elementary'},
        {name: 'Nuclear Power Plant'}
    ]
};

const store = createStore(
    reducers,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<App store={store}/>, node1);
}