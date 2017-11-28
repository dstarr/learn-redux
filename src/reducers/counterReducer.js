import * as TYPES from '../actions/actionTypes';

let initialState = {count: 0};


export default function counterReducer(state=initialState, action) {

    let newCount;

    switch (action.type) {

        case TYPES.INCREMENT_COUNT:

            newCount = state.count + 1;
            return Object.assign({}, state, {count: newCount});

        case TYPES.DECREMENT_COUNT:

            newCount = state.count - 1;
            return Object.assign({}, state, {count: newCount});


        default:
            return state;
    }
}