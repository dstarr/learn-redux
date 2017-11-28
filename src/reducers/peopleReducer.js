import * as TYPES from '../actions/actionTypes';

// let initialState = {
//     people: [
//         {id: 123, firstName: 'Bart', lastName: 'Simpson'},
//         {id: 324, firstName: 'Otto', lastName: 'Unknown'},
//         {id: 344, firstName: 'Homer', lastName: 'Simpson'},
//         {id: 546, firstName: 'Marge', lastName: 'Simpson'},
//         {id: 903, firstName: 'Maggie', lastName: 'Simpson'},
//         {id: 333, firstName: 'Lisa', lastName: 'Simpson'}
//     ]
// };

function peopleReducer(state = [], action) {

    console.log("peopleReducer CALLED. Action Type: " + action.type)


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

// let state1 = {
//
//     places: [
//         {id: 9, name: 'Moe\'s Tavern'},
//         {id: 3, name: 'Home'},
//         {id: 4, name: 'Springfield Elementary'},
//         {id: 5, name: 'Nuclear Power Plant'},
//     ]
// };