import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { postBeerRequest } from '../../store/ducks/Beers/actions'
import { PostBeer } from '../../store/ducks/Beers/types'

const RegisterBeer = () => {

    const { register , handleSubmit , errors } = useForm()

    const isLogged = useSelector((state: any) => state.reducerLogin.isLogged)

    const dispatch = useDispatch()

    const onSubmit = (beer: PostBeer) => {
        beer.price = (`R$ ${beer.price}`).replace(".",",")
        dispatch(postBeerRequest(beer))
    }

    return (
        <main className='main'>
        {isLogged ?
        <>
        <form onSubmit={handleSubmit(onSubmit)}>

            <label>Título</label>
            <input type='string' name='title' ref={register({required: true})} />
            {errors.title && <p>Campo obrigatório</p>}

            <label>Preço</label>
            <input type='number' step='.01' name='price' ref={register({required: true})} />
            {errors.price && <p>Campo obrigatório</p>}

            <label>Descrição</label>
            <input type='string' name='description' ref={register({required: true})} />
            {errors.description && <p>Campo obrigatório</p>}

            <label>URL da imagem</label>
            <input type='string' name='image' ref={register({required: true})} />
            {errors.image && <p>Campo obrigatório</p>}

            <button>Cadastrar</button>

        </form>

        </>
        : <Redirect to="/" />}
        </main>
    )
}

export default RegisterBeer