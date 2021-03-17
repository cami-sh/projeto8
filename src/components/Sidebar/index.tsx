import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../svg/logo.svg' 
import { ReactComponent as LogoG } from '../../svg/logo_g.svg'
import './styles.css'

const Sidebar = () => {
    const { isLogged , role } = useSelector((state: any) => state.reducerLogin)

    return(
        <aside className='sidenav'>
            {isLogged ? 
                <>
                <Logo className="logo"/>
                <ul className='sidenav_list'>

                    <li className='sidenav_list-item'>
                        <Link className='sidenav_list-link' to='/home'>Home</Link>
                    </li>

                    <li className='sidenav_list-item'>
                        <Link className='sidenav_list-link' to='/beers'>Produtos</Link>
                        <p>
                            <Link className='sidenav_list-link' to='/register-beer'>Cadastrar</Link>
                        </p>
                    </li>

                    {role === "admin" && 
                        <li className='sidenav_list-item'>
                            <Link className='sidenav_list-link' to='/users'>Usuários</Link>
                            <p>
                                <Link className='sidenav_list-link' to='/register-user'>Cadastrar</Link>
                            </p>
                    </li>
                    }
                </ul>
                </>
                : <LogoG className='logoG' />
            }
        </aside>
    )
}

export default Sidebar