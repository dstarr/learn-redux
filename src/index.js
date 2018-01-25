import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux'

import 'babel-polyfill'
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

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

const middleware = routerMiddleware(history);

// Build the middleware for intercepting and dispatching navigation actions
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// noinspection JSCheckFunctionSignatures
const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo')
const node1 = document.getElementById('app');

if (node1) {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App store={store}/>
            </ConnectedRouter>
        </Provider>,

        node1
    );
}