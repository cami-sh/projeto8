import axios from 'axios'

const baseApiLocal = 'http://localhost:4000'

const apiLocal = axios.create({
    baseURL: baseApiLocal
})

export default apiLocal