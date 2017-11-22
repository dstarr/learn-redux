import './actionTypes';
import {INCREMENT_COUNT} from "./actionTypes";

export function incrementCount() {
    return {
        type: INCREMENT_COUNT
    }
}