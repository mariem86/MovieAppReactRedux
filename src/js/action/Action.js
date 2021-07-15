import { ADD_MOVIE,Delete_MOVIE,EDIT_MOVIE} from "../const/ActionType"

export const addMovie=(payload)=>({
    type:ADD_MOVIE,
    payload:{
          ...payload,
          id: Math.random(),
    }
})
export const  removeMovie=(payload)=>({
    type:Delete_MOVIE,
    payload
})

export const editMovie=(payload)=>({
    type:EDIT_MOVIE,
    payload
})