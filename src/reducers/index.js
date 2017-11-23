// import {combineReducers} from 'redux';
import counterReducer from './counterReducer';

function rootReducer(state = initialState, action) {
    return {
        counterReducer: counterReducer(state, action)
    }
};

export default rootReducer;