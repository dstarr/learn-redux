import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill'
import {createProvider as Provider} from "react-redux";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AppContainer from './AppContainer'
import configureStore from '../store/configureStore'

const node1 = document.getElementById('app');


let store = configureStore();


if (node1) {
    ReactDOM.render(
        <AppContainer store={store}/>,

    node1
)
    ;
}