import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import {createStore} from 'redux';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import AppContainer from './AppContainer'
import reducer from '../reducers/counterReducer';

const store = createStore(reducer);

const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(<AppContainer store={store}/>, node1);
}