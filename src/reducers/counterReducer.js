import * as TYPES from '../actions/actionTypes';

let initialState = {count: 0};


export default function counterReducer(state=initialState, action) {

    switch (action.type) {

        case TYPES.INCREMENT_COUNT:
            return Object.assign(
                {},
                state,
                {count: state.count + 1})



        case TYPES.DECREMENT_COUNT:
            return Object.assign(
                {},
                state,
                {count: state.count - 1})


        default:
            return state;
    }
}