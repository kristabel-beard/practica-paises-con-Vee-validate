import service from '@vue/cli-service'

export default {


    async ObtenerPaises({ commit }) {
        let response = await service.ObtenerPaises();
        commit('SET_paises', response.data);
    },
    async ObtenerPais({ commit }, alpha3Code) {
        let response = await service.ObtenerPais(alpha3Code);
        commit('SET_pais', response.data);


    }

}