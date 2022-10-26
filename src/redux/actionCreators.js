import { INCREMENT, DECREMENT } from "./actionTypes";

export function incrementLikeActionCreator() {
    return {
        type: INCREMENT,
    }
}

export function decrementLikeActionCreator() {
    return {
        type: DECREMENT,
    }
}