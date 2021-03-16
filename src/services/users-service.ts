import apiLocal from './apiLocal'
import { PostUser } from '../store/ducks/Users/types'

const UsersService = {
    getUsers: () => apiLocal.get('/users?role=admin&role=editor'),
    postUser: (user: PostUser) => apiLocal.post('/users', user),
    deleteUser: (id: number) => apiLocal.delete(`/users/${id}`)
}

export default UsersService