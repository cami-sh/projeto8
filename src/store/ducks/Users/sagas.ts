import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'
import { decodeToken } from 'react-jwt'

import { getUsersSuccess , getUsersFailure , postUserSuccess , postUserFailure , deleteUserSuccess , deleteUserFailure } from './actions'
import UsersService from '../../../services/users-service'
import { AxiosResponse } from 'axios'

export function* getUsers() {
    try {
        const response: AxiosResponse = yield call(UsersService.getUsers)
        yield put(getUsersSuccess(response.data))
    } catch (erro) {
        yield put(getUsersFailure)
    }
}

export function* postUser(action: any) {
    try {
        const response: AxiosResponse = yield call(UsersService.postUser, action.payload)

        const decode: AxiosResponse = yield decodeToken(response.data.accessToken)

        const { sub } = yield decode

        const newUser: any = {
            name: action.payload.name,
            role: action.payload.role,
            id: sub
        }
        
        yield put(postUserSuccess(newUser))
    } catch (erro) {
        yield put(postUserFailure)
    }
}

export function* deleteUser(action:any) {
    try {
        yield call(UsersService.deleteUser, action.payload)
        yield put(deleteUserSuccess(action.payload))
    } catch (erro) {
        yield put(deleteUserFailure)
    }
}