import * as TYPES from "./actionTypes";

export function addPlace() {
    console.log('addPerson Action fired');
    return {
        type: TYPES.ADD_PLACE
    }
}

export function deletePlace(id) {

    return {
        type: TYPES.DELETE_PLACE,
        id: id
    }
}

export function editPlace() {
    console.log('editPerson Action fired');
    return {
        type: TYPES.EDIT_PLACE
    }
}

export function updatePlace() {
    console.log('updatePerson Action fired');
    return {
        type: TYPES.UPDATE_PLACE
    }
}