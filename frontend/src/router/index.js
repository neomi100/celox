import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import yachtPage from '../views/yacht-page.vue'
import yachtDetails from '../views/yacht-details.vue'
import becomeOwner from '../views/become-owner.vue'
import userDetails from '../views/user-details.vue'
import login from '../views/login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: home,
    },
    {
        path: '/yacht/',
        component: yachtPage,
    },
    {
        path: '/yacht/:id',
        component: yachtDetails
    },
    {
        path: '/become-owner/:id?',
        component: becomeOwner
    },
    {
        path: '/user/:id',
        component: userDetails,
    },
    {
        path: '/login/',
        component: login
    }

]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(){
        return {
            x:0,
            y:0
        }
    }
})

export default router