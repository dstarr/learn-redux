import * as TYPES from '../actions/actionTypes';

function placesReducer(state = [], action) {

    switch (action.type) {

        case TYPES.ADD_PLACE:
            console.log('Reducer ' + TYPES.ADD_PLACE);

            return {
                ...state,
                people: [...state, action.payload]
            };


        case TYPES.DELETE_PLACE:

            console.log('Reducer ' + TYPES.DELETE_PLACE);
            return {
                ...state,
                place: state.product.filter(place => place.id === action.id)
            };

        // case TYPES.EDIT_PLACE:

        default:
            return state;
    }
}

export default placesReducer;