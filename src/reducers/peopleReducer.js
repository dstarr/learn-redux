import * as TYPES from '../actions/actionTypes';

function peopleReducer(state = [], action) {

    switch (action.type) {

        case TYPES.DELETE_PERSON:
            console.log('peopleReducer ' + TYPES.DELETE_PERSON);
            console.log('first ' + action.first);
            console.log('last ' + action.last);

            return state.filter(person => (person.firstName !== action.first || person.lastName !== action.last));

        default:
            return state;
    }
}

export default peopleReducer