import apiLocal from './apiLocal'

const LoginService = {
    postLogin: (login: any) => apiLocal.post('/login', login),
    getUser: (id: number) => apiLocal.get(`users/${id}`)
}

export default LoginService