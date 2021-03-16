export enum TypesUsers {
    GET_USERS_REQUEST = 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS = 'GET_USERS_SUCCESS',
    GET_USERS_FAILURE = 'GET_USERS_FAILURE',

    POST_USER_REQUEST = 'POST_USER_REQUEST',
    POST_USER_SUCCESS = 'POST_USER_SUCCESS',
    POST_USER_FAILURE = 'POST_USER_FAILURE',

    DELETE_USER_REQUEST = 'DELETE_USER_REQUEST',
    DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE = 'DELETE_USER_FAILURE'
}

export interface User {
    name: string,
    role: string,
    id: number
}

export interface PostUser {
    name: string,
    email: string,
    role: string,
    password: string
}