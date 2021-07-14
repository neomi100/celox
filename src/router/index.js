import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import becomeHost from '../views/become-host.vue'
import login from '../views/login.vue'
import yachtPage from '../views/yacht-page.vue'
import yachtDetails from '../views/yacht-details.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: home
    },
    {
        path: '/yacht-page',
        component: yachtPage,
    }, {
        path: '/become-host',
        component: becomeHost
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/details',
        component: yachtDetails
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router