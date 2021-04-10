import api from "./tbcapi"
import authservices from "./authservices"


api.interceptors.response.use(async response => {
        return response
    },
    async function(error) {
        const { config, response } = error
        const originalRequest = config
        if (response.status == "401" || response.status == "403") {
            let response = await authservices.auth()
            let token = response.data.token
            localStorage.setItem("Token", token);
            return api(originalRequest);
        }
        return Promise.reject(error)
    })
api.interceptors.request.use(async config => {
    config.headers["Authorization"] = "Bearer " + localStorage.getItem("Token")
    return config
})
export default {
    catalog() {
        return api.get('/bb/categories')
    }
}