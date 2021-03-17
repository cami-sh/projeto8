import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { postUserRequest } from '../../store/ducks/Users/actions'
import { Redirect } from 'react-router-dom'
import Header from '../../components/Header'

const RegisterUser = () => {

    const { register , handleSubmit , errors } = useForm()

    const { isLogged , role } = useSelector((state: any) => state.reducerLogin)

    const dispatch = useDispatch()

    const onSubmit = (data: any) => {
        dispatch(postUserRequest(data))
    }

    return (
        <>
        <Header props={'Cadastrar novo usuário'} />
        <main className='main'>{isLogged ? 
            <>{role === "admin" ? 
                <>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <label>E-mail</label>
                        <input className='inputText' type="email" name='email' ref={register({required: true})} />
                        {errors.email && <p>E-mail obrigatório</p>}

                        <label>Senha</label>
                        <input className='inputText' type='password' name='password' ref={register({required:true})} />
                        {errors.password && <p>Senha obrigatória</p>}

                        <label>Nome</label>
                        <input className='inputText' type='string' name='name' ref={register({required: true})} />
                        {errors.name && <p>Nome obrigatório</p>}

                        <label>Permissão</label>

                        <label>
                            <input type='radio' name='role' value='admin' ref={register({required: true})} />
                            Administrador 
                        </label>

                        <label>
                            <input type='radio' name='role' value='editor' ref={register({required: true})} />
                            Editor
                        </label>

                        <button className="buttonForms">Registrar</button>

                    </form>
                </>
            : <Redirect to="/home" />}
            </>
            
        : <Redirect to="/" />}    
        </main>
        </>
        
    )
}

export default RegisterUser