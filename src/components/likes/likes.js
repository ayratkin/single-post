// import { connect } from "react-redux";

function Likes(props) {
    return (
        <>
            <div className="button-controls">
                <button onClick={props.onIncrementLikes}>like {props.likesCount}</button>
                <button onClick={props.onDecrementLikes}>dislike</button>
            </div>
        </>
    )
}

export default Likes;