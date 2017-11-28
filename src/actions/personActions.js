import * as TYPES from "./actionTypes";

export function addPerson() {
    console.log('addPerson Action fired');
    return {
        type: TYPES.ADD_PERSON
    }
}

export function deletePerson() {
    console.log('deletePerson Action fired');

    return {
        type: TYPES.DELETE_PERSON
    }
}

export function editPerson() {
    console.log('editPerson Action fired');
    return {
        type: TYPES.EDIT_PERSON
    }
}

export function updatePerson() {
    console.log('updatePerson Action fired');
    return {
        type: TYPES.UPDATE_PERSON
    }
}