import Vue from 'vue';
import VueRouter from 'vue-router';
import Paises from './Views/Paises.vue';
import PaisDetalle from './Views/PaisDetalle.vue'
import Marvel from './Views/Marvel.vue'
import user from './Views/user.vue'

Vue.use(VueRouter);
const routes = [{
        path: '/Paises',
        name: 'Paises',
        component: Paises

    }, {
        path: '/Paises/:id/Detalle',
        name: 'PaisDetalle',
        component: PaisDetalle,
        props: true
    },
    {
        path: '/Marvel',
        name: 'Marvel',
        component: Marvel

    },
    {
        path: '/user',
        name: '/user',
        component: user

    },

]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router