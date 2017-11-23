import * as TYPES from '../actions/actionTypes';

let initialState = 0;


export default function counterReducer(state=initialState, action) {

    switch (action.type) {

        case TYPES.INCREMENT_COUNT:
            return state + 1;

        case TYPES.DECREMENT_COUNT:
            return state - 1;

        default:
            return state;
    }
}