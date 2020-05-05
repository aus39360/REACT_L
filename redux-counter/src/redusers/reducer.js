import { INC, DEC } from '../actions/constans'


const initialState = { count: 5}

const reducer = (state= initialState, actions) => {
    switch(actions.type) {
        case INC:
            return { count: state.count + 1}
        case DEC:
            return { count: state.count - 1}
        default:
            return state
    }
}

export default reducer