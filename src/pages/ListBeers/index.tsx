import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getBeersRequest , deleteBeerRequest } from '../../store/ducks/Beers/actions'
import { Beer } from '../../store/ducks/Beers/types'

const ListBeers = () => {

    const dispatch = useDispatch()

    const arrayBeers: Beer[] = useSelector((state: any) => state.reducerBeers.arrayBeers)

    useEffect(() => {
        dispatch(getBeersRequest())
    }, [dispatch])

    const { isLogged , role } = useSelector((state: any) => state.reducerLogin)

    const deleteBeer = (id: number) => {
        dispatch(deleteBeerRequest(id))
    }
    console.log(isLogged)

    return (
        <main className='main'>
        {isLogged ? 
            <>
                {arrayBeers?.map((item: Beer) => (
                    <li key={item.id}>
                        {item.title}

                        {role === "admin" && <button onClick={() => deleteBeer(item.id)}>X</button>}
                    </li>
                ))}
            </> 
        : <Redirect to='/' />}
        </main>
    )
}

export default ListBeers