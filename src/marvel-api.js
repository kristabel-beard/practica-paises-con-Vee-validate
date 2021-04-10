import axios from 'axios';



const marvelAPI = axios.create({
    baseURL: 'https://gateway.marvel.com:443/v1/public/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})
marvelAPI.defaults.params = {
    apikey: '1299e01f84c3537526a8c0acf4924555',
    hash: '20ea2f986c730725b37a241bf934ce28',
    ts: 1
};
marvelAPI.interceptors.request.use(async config => {
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)
export default marvelAPI;