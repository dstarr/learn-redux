import * as TYPES from '../actions/actionTypes';

function peopleReducer(state = [], action) {

    switch (action.type) {

        case TYPES.ADD_PERSON:

            return {
                ...state,
                people: [...state, action.payload]
            };


        case TYPES.DELETE_PERSON:

            return {
                ...state,
                people: state.product.filter(person => person.id === action.payload)
            };

        // case TYPES.EDIT_PERSON:
        // case TYPES.UPDATE_PERSON:
        default:
            return state;
    }
}

export default peopleReducer