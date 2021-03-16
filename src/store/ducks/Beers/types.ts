export enum TypesBeers {
    GET_BEERS_REQUEST = 'GET_BEERS_REQUEST',
    GET_BEERS_SUCCESS = 'GET_BEERS_SUCCESS',
    GET_BEERS_FAILURE = 'GET_BEERS_FAILURE',

    POST_BEER_REQUEST = 'POST_BEER_REQUEST',
    POST_BEER_SUCCESS = 'POST_BEER_SUCCESS',
    POST_BEER_FAILURE = 'POST_BEER_FAILURE',

    DELETE_BEER_REQUEST = 'DELETE_BEER_REQUEST',
    DELETE_BEER_SUCCESS = 'DELETE_BEER_SUCCESS',
    DELETE_BEER_FAILURE = 'DELETE_BEER_FAILURE'
}

export interface PostBeer {
    title: string,
    price: string,
    description: string,
    image: string
}

export interface Beer {
    title: string,
    price: string,
    id: number
}