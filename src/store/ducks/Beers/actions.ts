import { action } from 'typesafe-actions'
import { TypesBeers , PostBeer , Beer } from './types'

export const getBeersRequest = () => action(TypesBeers.GET_BEERS_REQUEST)
export const getBeersSuccess = (data: Beer[]) => action(TypesBeers.GET_BEERS_SUCCESS, data)
export const getBeersFailure = () => action(TypesBeers.GET_BEERS_FAILURE)

export const postBeerRequest = (beer: PostBeer) => action(TypesBeers.POST_BEER_REQUEST, beer)
export const postBeerSuccess = (beer: Beer) => action(TypesBeers.POST_BEER_SUCCESS, beer)
export const postBeerFailure = () => action(TypesBeers.POST_BEER_FAILURE)

export const deleteBeerRequest = (id: number) => action(TypesBeers.DELETE_BEER_REQUEST, id)
export const deleteBeerSuccess = (data: any) => action(TypesBeers.DELETE_BEER_SUCCESS, data)
export const deleteBeerFailure = () => action(TypesBeers.DELETE_BEER_FAILURE)