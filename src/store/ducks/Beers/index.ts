import { Reducer } from 'redux'
import { TypesBeers , Beer } from './types'

const initialState: any = {
    arrayBeers: [],
    loading: false,
    error: false
}

const reducerBeers: Reducer = (state = initialState, action) => {
    switch(action.type) {
        case TypesBeers.GET_BEERS_REQUEST:
            return {...state, loading: true}
        case TypesBeers.GET_BEERS_SUCCESS:
            return {
                ...state,
                loading: false,
                arrayBeers: action.payload,
            }
        case TypesBeers.GET_BEERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }

        case TypesBeers.POST_BEER_REQUEST:
            return {...state, loading: true}
        case TypesBeers.POST_BEER_SUCCESS:
            return {
                ...state,
                loading: false,
                arrayBeers: [...state.arrayBeers, action.payload]
            }
        case TypesBeers.POST_BEER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }

        case TypesBeers.DELETE_BEER_REQUEST:
            return {...state, loading: true}
        case TypesBeers.DELETE_BEER_SUCCESS:
            const index = state.arrayBeers.findIndex((item: Beer) => item.id === action.payload)
            state.arrayBeers.splice(index, 1)
            return {
                ...state,
                loading: false,
                arrayBeers: [...state.arrayBeers]
            }
        case TypesBeers.DELETE_BEER_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        
        default:
            return state
    }
}

export default reducerBeers