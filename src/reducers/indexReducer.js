import * as TYPES from '../actions/actionTypes';

let initialState = 0;


export default function reducer(state=initialState, action) {
    switch (action.type) {

        case TYPES.INCREMENT_COUNT:
            return state + 1;

        default:
            return state;
    }
}