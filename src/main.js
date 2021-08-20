import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import http from './http'
import vuetify from './vuetify/vuetify'
import cors from "cors";

Vue.config.productionTip = false


new Vue({
    router,
    http,
    vuetify,
    cors,
    render: h => h(App),
}).$mount('#app')
Vue.use(cors)