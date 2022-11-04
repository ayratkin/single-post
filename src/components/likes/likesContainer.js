import { connect } from "react-redux";
import Likes from "./likes"
import { incrementLikeActionCreator, decrementLikeActionCreator } from '../../redux/actionCreators'

function mapStateToProps(state) {
    const { likesReducer } = state;
    return {
        likesCount: likesReducer.likesCount
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementLikes: () => {
            dispatch(incrementLikeActionCreator())
        },

        onDecrementLikes: () => {
            dispatch(decrementLikeActionCreator())
        }
    }
}

const LikesContainer = connect(mapStateToProps, mapDispatchToProps)(Likes);

export default LikesContainer;