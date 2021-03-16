import apiLocal from './apiLocal'

const BeerService = {

    getBeers: () => apiLocal.get('/beers', { 
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),

    postBeer: (beer: any) => apiLocal.post('/beers', beer , {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }),
    deleteBeer: (id: number) => apiLocal.delete(`/beers/${id}`, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
}

export default BeerService