import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'
import { decodeToken } from 'react-jwt'

import { postLoginSuccess , postLoginFailure } from './actions'
import LoginService from '../../../services/login-service'
import { AxiosResponse } from 'axios'

export function* postLogin(action: any) {
    try {
        const response: AxiosResponse = yield call(LoginService.postLogin, action.payload)
        yield localStorage.setItem("token", response.data.accessToken)

        const decode: AxiosResponse = yield decodeToken(response.data.accessToken)

        const { sub } = yield decode

        const userData: AxiosResponse = yield call(LoginService.getUser, sub)

        yield localStorage.setItem('name', userData.data.name)
        yield localStorage.setItem('id', userData.data.id)
        yield localStorage.setItem('role', userData.data.role)
        yield localStorage.setItem('isLogged', 'true')

        yield put(postLoginSuccess(userData.data))
        
    } catch (erro) {
        yield put(postLoginFailure)
    }
}