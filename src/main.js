import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store/index.js'


import * as VueGoogleMaps from 'vue2-google-maps';
import './styles/styles.scss'
import locale from 'element-ui/lib/locale/lang/en'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, { locale })



const GOOGLE_API_KEY = 'AIzaSyCm3zYkW7wg6dnV3VagY8qsT86jZhYLHGQ' // need to secure "ori key"

Vue.config.productionTip = false

Vue.use(VueGoogleMaps, {
    load: {
        key: GOOGLE_API_KEY,
        libraries: 'places',
    },
});

new Vue({
    router,
    store,
    ElementUI,
    render: h => h(app)
}).$mount('#app')