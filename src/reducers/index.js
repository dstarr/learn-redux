import {combineReducers} from 'redux';
import counterReducer from './counterReducer';


const rootReducer = combineReducers({
    count: counterReducer(state, action)
});

export default rootReducer;