import Vue from 'vue'
import Vuex from 'vuex'
import { yachtStore } from './yacht-stor.js'

import {userStore} from './user.store'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        yachtStore,
        userStore
    }
})

