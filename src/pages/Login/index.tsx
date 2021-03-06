import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { postLoginRequest } from '../../store/ducks/Login/actions'
import { LoginInterface } from '../../store/ducks/Login/types'
import './styles.css'

const Login = () => {

    const { register , handleSubmit , errors } = useForm()

    const isLogged = useSelector((state: any) => state.reducerLogin.isLogged)

    const dispatch = useDispatch()

    const onSubmit = (data: LoginInterface) => {
        dispatch(postLoginRequest(data))
    }

    return (
        <main className='main'>

            <h3 className='titleLogin'>Entrar no Empório da Cerveja</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <label>E-mail</label>
                <input className='inputText' type="email" name='email' ref={register({required: true})} />
                {errors.email && <p>E-mail obrigatório</p>}

                <label>Senha</label>
                <input className='inputText' type='password' name='password' ref={register({required:true})} />
                {errors.password && <p>Senha obrigatória</p>}

                <button className="buttonForms">Entrar</button>

            </form>

        {isLogged && <Redirect to='/home' />}
        </main>
    )
}

export default Login