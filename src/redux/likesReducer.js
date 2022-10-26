import { INCREMENT, DECREMENT } from './actionTypes'

const initialState = {
    likesCount: 0
} 

const likesReducer = (state = initialState, action) => {
    switch(action.type) {

        case INCREMENT:
            return {
                ...state, 
                likesCount: state.likesCount + 1
            }
        
        case DECREMENT:
            return {
                ...state, 
                likesCount: state.likesCount - 1
            }
        
        default:
            return state
    }
}

export default likesReducer;