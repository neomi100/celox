import Vue from 'vue'
import Vuex from 'vuex'
import { userStore } from './user.store.js'
import { yachtStore } from './yacht-store.js'
import { orderStore } from './order.store.js'



Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        yachtStore,
        userStore,
        orderStore
    }
})