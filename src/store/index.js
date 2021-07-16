import Vue from 'vue'
import Vuex from 'vuex'
import { yachtStore } from './yacht-stor.js'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {},
    mutations: {},
    actions: {},
    modules: {
        yachtStore,
    }
})