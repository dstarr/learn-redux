import {combineReducers} from 'redux';
import counterReducer from './counterReducer';
import peopleReducer from './peopleReducer';


const rootReducer = combineReducers({
    count: counterReducer(state, action)
});

export default rootReducer;


// function rootReducer(state = initialState, action) {
//     return {
//         counterReducer: counterReducer(state, action),
//         peopleReducer: peopleReducer(state, action);
//     }
// }