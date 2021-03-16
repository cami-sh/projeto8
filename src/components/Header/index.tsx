import { useSelector } from 'react-redux'
import './styles.css'

const Header = () => {

    const { isLogged , name } = useSelector((state: any) => state.reducerLogin)

    return (
        <header className='header'>
            {isLogged && 
                <>
                <p>Nome da página</p>
                <p>{name}</p>
                </>
            }
        </header>
    )
}

export default Header