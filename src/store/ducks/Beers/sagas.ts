import { put } from 'redux-saga/effects'
import { call } from 'typed-redux-saga'

import { getBeersSuccess , getBeersFailure , postBeerSuccess , postBeerFailure , deleteBeerSuccess , deleteBeerFailure } from './actions'
import BeerService from '../../../services/beer-service'
import { AxiosResponse } from 'axios'

export function* getBeers() {
    try {
        const response: AxiosResponse = yield call(BeerService.getBeers)
        yield put(getBeersSuccess(response.data))
    } catch (erro) {
        yield put(getBeersFailure)
    }
}

export function* postBeer(action: any) {
    try {
        const response: AxiosResponse = yield call(BeerService.postBeer, action.payload)
        yield put(postBeerSuccess(response.data))
    } catch (erro) {
        yield put(postBeerFailure)
    }
}

export function* deleteBeer(action: any) {
    try {
        yield call(BeerService.deleteBeer, action.payload)
        yield put(deleteBeerSuccess(action.payload))
    } catch (erro) {
        yield put(deleteBeerFailure)
    }
}