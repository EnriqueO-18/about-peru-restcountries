import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.restcountries.com/countries/v5'
})

export default {
    getCountryByName(name) {
        return api.get('', {
            params: {
                q: name,
                'api-key': import.meta.env.VITE_RESTCOUNTRIES_API_KEY
            }
        })
    }
}