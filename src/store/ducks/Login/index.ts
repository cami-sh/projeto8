import { Reducer } from 'redux'
import { TypesLogin } from './types'

const initialState: any = {
    name: localStorage.getItem('name'),
    role: localStorage.getItem('role'),
    id: localStorage.getItem('id'),
    isLogged: localStorage.getItem('isLogged'),
    loading: false,
    error: false
}

const reducerLogin: Reducer = (state = initialState, action) => {
    switch(action.type){
        case TypesLogin.POST_LOGIN_REQUEST:
            return {...state, loading: true}
        case TypesLogin.POST_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                name: action.payload.name,
                role: action.payload.role,
                id: action.payload.id,
                isLogged: true
            }
        case TypesLogin.POST_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case TypesLogin.LOGOUT:
            return {
                ...state,
                name: '',
                role: '',
                id: '',
                isLogged: false
            }
        default:
            return state
    }
}

export default reducerLogin