import axios from "./axios"
import api from "./tbcapi"


export default {
    auth() {
        return axios.post('./users/authenticate', {
            username: 'kbeard',
            password: 'Crepusculo8!',
            bbuid: '9B1D0F6F-A58D-4659-AEA4-6BC1B2E4C712'
        })
    }
}

api.interceptors.request.use(async config => {
        console.log(config)
        return config
    },
    function(error) {

        return Promise.reject(error)
    })