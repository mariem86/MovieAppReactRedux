import { ADD_MOVIE,Delete_MOVIE,EDIT_MOVIE} from "../const/ActionType"
import {Data}  from '../../components/Data';
const initialState = {
   Data
}

const movieReducer = (state = initialState, { type, payload }) => {
    switch (type) {

    case ADD_MOVIE:
        return { ...state,Data:[...state.Data,payload]  }
    case Delete_MOVIE:
        return { ...state, Data: state.Data.filter(e => e.id != payload) }
    case EDIT_MOVIE:
        return {...state,Data:state.Data.map(e=>e.id===payload.id ? {...payload.newMovie}:e)}

    default:
        return state
    }
}
export default  movieReducer