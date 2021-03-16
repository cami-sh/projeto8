import { action } from 'typesafe-actions'
import { TypesLogin , LoginInterface } from './types'

export const postLoginRequest = (login: LoginInterface) => action(TypesLogin.POST_LOGIN_REQUEST, login)
export const postLoginSuccess = (data: any) => action(TypesLogin.POST_LOGIN_SUCCESS, data)
export const postLoginFailure = () => action(TypesLogin.POST_LOGIN_FAILURE)