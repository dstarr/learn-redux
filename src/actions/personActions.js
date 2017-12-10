import * as TYPES from "./actionTypes";

export function addPerson() {
    console.log('addPerson Action fired');
    return {
        type: TYPES.ADD_PERSON
    }
}

export function deletePerson(first, last) {
    console.log('deletePerson Action fired');

    return {
        type: TYPES.DELETE_PERSON,
        first: first,
        last: last
    }
}