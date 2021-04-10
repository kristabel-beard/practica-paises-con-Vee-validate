import api from "./tbcapi"

export default {
    auth() {
        return api.post('./users/authenticate', {
            username: 'dguzman',
            password: 'rmi6T0532516',
            bbuid: '9B1D0F6F-A58D-4659-AEA4-6BC1B2E4C712'
        })
    }
}