import { action } from 'typesafe-actions'
import { TypesUsers , User , PostUser } from './types'

export const getUsersRequest = () => action(TypesUsers.GET_USERS_REQUEST)
export const getUsersSuccess = (data: User[]) => action(TypesUsers.GET_USERS_SUCCESS, data)
export const getUsersFailure = () => action(TypesUsers.GET_USERS_FAILURE)

export const postUserRequest = (user: PostUser) => action(TypesUsers.POST_USER_REQUEST, user)
export const postUserSuccess = (data: User) => action(TypesUsers.POST_USER_SUCCESS, data)
export const postUserFailure = () => action(TypesUsers.POST_USER_FAILURE)

export const deleteUserRequest = (id: number) => action(TypesUsers.DELETE_USER_REQUEST, id)
export const deleteUserSuccess = (id: number) => action(TypesUsers.DELETE_USER_SUCCESS, id)
export const deleteUserFailure = () => action(TypesUsers.DELETE_USER_FAILURE)