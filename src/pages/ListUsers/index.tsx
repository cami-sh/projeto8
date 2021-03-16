import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersRequest , deleteUserRequest } from '../../store/ducks/Users/actions'
import { User } from '../../store/ducks/Users/types'
import { Redirect } from 'react-router-dom'

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
    console.log(isLogged)

    return (
        <main className='main'>
        {isLogged ? 
            
            <>{role === 'admin' ?
            <>
                {arrayUsers?.map((item: User) => (
                    <li key={item.id}>
                        {item.name} - {item.role}
                        <button onClick={() => deleteUser(item.id)}>X</button>
                    </li>
                ))} 
            </> : <Redirect to='/home' />}
            </>
             : <Redirect to="/" />
        }
        </main>
    )
}

export default ListUsers