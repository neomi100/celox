import Vue from 'vue'
import app from './app.vue'
import router from './router'
import store from './store/index.js'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';
import * as VueGoogleMaps from 'vue2-google-maps';
import VueSocialSharing from 'vue-social-sharing';

import './styles/styles.scss'

Vue.use(ElementUI, { locale })
Vue.use(VueSocialSharing);

const GOOGLE_API_KEY = 'AIzaSyCm3zYkW7wg6dnV3VagY8qsT86jZhYLHGQ' 

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