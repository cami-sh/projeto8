import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getBeersRequest } from '../../store/ducks/Beers/actions'
import { getUsersRequest } from '../../store/ducks/Users/actions'
import Header from '../../components/Header'
import './styles.css'

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getBeersRequest())
        dispatch(getUsersRequest())
        
    }, [dispatch])

    const isLogged = useSelector((state: any) => state.reducerLogin.isLogged)
    const beers: any = useSelector((state: any) => state.reducerBeers.arrayBeers)
    const users: any = useSelector((state: any) => state.reducerUsers.arrayUsers)

    return (
        <>
        <Header props={"Home"}/>
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
        </>
    )
}

export default Home