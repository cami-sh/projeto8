import { Route , Switch } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import ListUsers from './pages/ListUsers'
import RegisterUser from './pages/RegisterUser'
import RegisterBeer from './pages/RegisterBeer'
import ListBeers from './pages/ListBeers'

const Routes = () => (
    <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/home' exact component={Home} />
        <Route path='/users' exact component={ListUsers} />
        <Route path='/register-user' exact component={RegisterUser} />
        <Route path='/register-beer' exact component={RegisterBeer} />
        <Route path='/beers' exact component={ListBeers} />
    </Switch>
)

export default Routes