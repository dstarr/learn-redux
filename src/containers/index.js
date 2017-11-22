import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './AppContainer'
import '../../../redux-demo/node_modules/bootstrap/dist/css/bootstrap.min.css'

const node1 = document.getElementById('app');

if (node1) {

    ReactDOM.render(<AppContainer/>, node1);
}
