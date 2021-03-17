import { useDispatch, useSelector } from 'react-redux'
import './styles.css'
import { logOut } from '../../store/ducks/Login/actions'

const Header = (props: any) => {

    const { isLogged , name } = useSelector((state: any) => state.reducerLogin)

    const dispatch = useDispatch()

    const logout = () => {
        localStorage.clear()
        dispatch(logOut())
    }

    return (
        <header className='header'>
            {isLogged && 
                <>
                <h3 className='titleHeader'>{props.props}</h3>
                <div className='user-info'>
                    <p>{name}</p>
                    <button className="buttonForms" onClick={logout}>Sair</button>
                </div>
                </>
            }
        </header>
    )
}

export default Header