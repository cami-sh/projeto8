import { Reducer } from 'redux'
import { TypesUsers , User } from './types'

const initialState: any = {
    arrayUsers: [],
    loading: false,
    error: false
}

const reducerUsers: Reducer = (state = initialState, action) => {
    switch(action.type){
        case TypesUsers.GET_USERS_REQUEST:
            return {...state, loading: true}
        case TypesUsers.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                arrayUsers: action.payload
            }
        case TypesUsers.GET_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TypesUsers.POST_USER_REQUEST:
            return {...state, loading: true}
        case TypesUsers.POST_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                arrayUsers: [...state.arrayUsers, action.payload]
            }
        case TypesUsers.POST_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TypesUsers.DELETE_USER_REQUEST:
            return { ...state , loading: true}
        case TypesUsers.DELETE_USER_SUCCESS:
            const index = state.arrayUsers.findIndex((item: User) => item.id === action.payload)
            state.arrayUsers.splice(index, 1)
            return {
                ...state,
                loading: false,
                arrayUsers: [...state.arrayUsers]
            }
        case TypesUsers.DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                return: true
            }
        default:
            return state
    }
}

export default reducerUsers