import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// eslint-disable-next-line no-unused-vars
import service from "./service";

export default new Vuex.Store({
    state: {
        paises: [],
        pais: {},
    },
    mutations: {

        SET_paises(state, payload) {
            state.paises = payload;
        },
        SET_pais(state, payload) {
            state.pais = payload;
        },


    },
    actions: {
        async ObtenerPaises({ commit }) {
            let response = await service.ObtenerPaises();
            commit('SET_paises', response.data);
        },
        async ObtenerPais({ commit }, alpha3Code) {
            let response = await service.ObtenerPais(alpha3Code);
            commit('SET_pais', response.data);




        }
    },
})