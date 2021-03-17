import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getBeersRequest , deleteBeerRequest } from '../../store/ducks/Beers/actions'
import { Beer } from '../../store/ducks/Beers/types'
import Header from '../../components/Header'

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

    return (
        <>
        <Header props={'Produtos'} />
        <main className='main'>
        {isLogged ? 
            <table>
            <tbody>
                <tr>
                    <th>Item</th>
                    <th>Preço</th>
                </tr>
                {arrayBeers?.map((item: Beer) => (
                    <tr key={item.id}>

                        <th>{item.title}</th>
                        <th>{item.price}</th>

                        {role === "admin" && 
                            <th>
                                <button onClick={() => deleteBeer(item.id)}>X</button>
                            </th>
                        }
                    </tr>
                ))}
            </tbody> 
            </table>
        : <Redirect to='/' />}
        </main>
        </>
    )
}

export default ListBeers