import Vue from "vue"
import Vuex from "vuex"
import pais from '../store'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        pais: pais
    }
})

export default store