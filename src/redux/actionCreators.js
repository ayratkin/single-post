import { INCREMENT, DECREMENT, CHANGE_TEXT } from "./actionTypes";

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

export function changeText(text) {
    return {
        type: CHANGE_TEXT,
        text,
    }
}