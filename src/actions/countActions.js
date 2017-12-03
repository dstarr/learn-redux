import * as TYPES from "./actionTypes";

export function incrementCount() {
    console.log('Action ' + TYPES.INCREMENT_COUNT);
    return {
        type: TYPES.INCREMENT_COUNT
    }
}

export function decrementCount() {
    console.log('Action ' + TYPES.DECREMENT_COUNT);
    return {
        type: TYPES.DECREMENT_COUNT
    }
}