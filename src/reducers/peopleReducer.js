import * as TYPES from '../actions/actionTypes';

function peopleReducer(state = [], action) {

    switch (action.type) {

        case TYPES.DELETE_PERSON:

            return state.filter(person => person.id !== action.id);

        default:
            return state;
    }
}

export default peopleReducer