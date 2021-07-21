import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import becomeOwner from '../views/become-owner.vue'
import login from '../views/login.vue'
import yachtPage from '../views/yacht-page.vue'
import yachtDetails from '../views/yacht-details.vue'
import userDetails from '../views/user-details.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: home
    },
    {
        path: '/yacht/',
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
    },
    {
        path: '/user-details',
        component: userDetails,     
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router