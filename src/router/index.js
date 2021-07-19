import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import becomeOwner from '../views/become-owner.vue'
import login from '../views/login.vue'
import yachtPage from '../views/yacht-page.vue'
import yachtDetails from '../views/yacht-details.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/yacht-page',
        component: yachtPage,
    }, {
        path: '/become-owner/:id?',
        component: becomeOwner
    },
    {
        path: '/login',
        component: login
    },
    {
        path: '/details/:id',
        component: yachtDetails
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router