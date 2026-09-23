import axios from 'axios'

const api = axios.create({
    baseURL: 'https://restcountries.com/v3.1'
})

export default {
    getCountryByName(name) {
        return api.get(`/name/${name}`)
    }
}