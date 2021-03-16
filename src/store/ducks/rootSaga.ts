import { all , takeLatest } from 'typed-redux-saga'

import { TypesLogin } from './Login/types'
import { postLogin } from './Login/sagas'
import { TypesUsers } from './Users/types'
import { getUsers , postUser , deleteUser } from './Users/sagas'
import { TypesBeers } from './Beers/types'
import { postBeer , getBeers , deleteBeer } from './Beers/sagas'

export default function* rootSaga(): any {
    return yield all ([
        takeLatest(TypesLogin.POST_LOGIN_REQUEST, postLogin),

        takeLatest(TypesUsers.GET_USERS_REQUEST, getUsers),
        takeLatest(TypesUsers.POST_USER_REQUEST, postUser),
        takeLatest(TypesUsers.DELETE_USER_REQUEST, deleteUser),
        
        takeLatest(TypesBeers.POST_BEER_REQUEST, postBeer),
        takeLatest(TypesBeers.GET_BEERS_REQUEST, getBeers),
        takeLatest(TypesBeers.DELETE_BEER_REQUEST, deleteBeer)
    ])
}