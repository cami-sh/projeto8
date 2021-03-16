import { createStore , Store , applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './ducks/rootSaga'
import createRootReducer from './ducks/rootReducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware
]

const store: Store = createStore (
    createRootReducer(),
    composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSaga)

export default store