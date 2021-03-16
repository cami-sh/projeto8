import { combineReducers } from 'redux'

import reducerLogin from './Login'
import reducerUsers from './Users'
import reducerBeers from './Beers'

const createRootReducer = () => combineReducers ({
    reducerLogin,
    reducerUsers,
    reducerBeers
})

export default createRootReducer