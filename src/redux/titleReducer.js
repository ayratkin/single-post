import { CHANGE_TEXT } from './actionTypes'

const initialState = {
    text: ''
} 

const titleReducer = (state = initialState, action) => {

    console.log(`input text is ${action.text}`)

    switch(action.type) {
        case CHANGE_TEXT:
            return {
                ...state,
                text: action.text
            }
        
        
        default:
            return state;
    }
}

export default titleReducer;

