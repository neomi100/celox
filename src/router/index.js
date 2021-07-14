import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import becomeHost from '../views/become-host.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/explorer',
        name: 'explorer',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
        path: '/become-host',
        name: 'Become-Host',
        component: becomeHost
    }, {
        path: '/login',
        name: 'login',
        component: login
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router