import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from '../components/AppContainer'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import {createStore} from 'redux';
import reducer from '../reducers/indexReducer';

let store = createStore(reducer);

const node1 = document.getElementById('app');

if (node1) {

    ReactDOM.render( <AppContainer store={store}/>, node1 );
}