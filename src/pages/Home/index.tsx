import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBeersRequest } from '../../store/ducks/Beers/actions'
import { getUsersRequest } from '../../store/ducks/Users/actions'
import './styles.css'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token !== null){
            dispatch(getBeersRequest())
            dispatch(getUsersRequest())
        }
        
    }, [])

    const isLogged = useSelector((state: any) => state.reducerLogin.isLogged)
    const beers: any = useSelector((state: any) => state.reducerBeers.arrayBeers)
    const users: any = useSelector((state: any) => state.reducerUsers.arrayUsers)

    return (
        <main className='main'>{isLogged ? 
            <div className='main-overview'>
                <div className='card'>
                    <p>Usuários cadastrados</p>
                    <p>{users.length}</p>
                </div>

                <div className='card'>
                    <p>Produtos cadastrados</p>
                    <p>{beers.length}</p>
                </div>
                
            </div>
        : <Redirect to="/" /> }
        </main>
    )
}

export default Home