import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersRequest , deleteUserRequest } from '../../store/ducks/Users/actions'
import { User } from '../../store/ducks/Users/types'
import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'
import './styles.css'

const ListUsers = () => {

    const { isLogged , role } = useSelector((state: any) => state.reducerLogin)

    const dispatch = useDispatch()
    const arrayUsers: User[] = useSelector((state: any) => state.reducerUsers.arrayUsers)

    useEffect(() => {
        dispatch(getUsersRequest())
    }, [dispatch])

    const deleteUser = (id: number) => {
        dispatch(deleteUserRequest(id))
    }

    return (
        <>
        <Header props={'Usuários'} />
        <main className='main'>
        {isLogged ? 
            
            <>{role === 'admin' ?
            <table>
            <tbody>
                <tr>
                    <th>Nome</th>
                    <th>Permissão</th>
                </tr>
                {arrayUsers?.map((item: User) => (
                    <tr key={item.id}>
                        <th>{item.name}</th>
                        <th>{item.role}</th>
                        <th><button onClick={() => deleteUser(item.id)}>X</button></th>
                    </tr>
                ))} 
            </tbody>
            </table> : <Redirect to='/home' />}
            </>
             : <Redirect to="/" />
        }
        </main>
        </>
    )
}

export default ListUsers