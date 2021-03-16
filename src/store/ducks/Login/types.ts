export enum TypesLogin {
    POST_LOGIN_REQUEST = 'POST_LOGIN_REQUEST',
    POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS',
    POST_LOGIN_FAILURE = 'POST_LOGIN_FAILURE'
}

export interface LoginInterface {
    email: string,
    password: string
}