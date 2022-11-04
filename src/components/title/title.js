import { useDispatch, useSelector } from 'react-redux'
import { changeText } from '../../redux/actionCreators'

function Title(props) {

    const text = useSelector(state => {
        const { titleReducer } = state;
        return titleReducer.text
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        // console.log(`handle text = ${e.target.value}`)
        dispatch(changeText(e.target.value))
    }

    return (
        <>
            <div className="card-title">
                <div className="card-title-top">
                    <input type='text' onChange={handleChange}/>
                </div>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Title;