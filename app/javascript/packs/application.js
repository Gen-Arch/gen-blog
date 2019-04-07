import Vue from 'vue'
import VueRouter from 'vue-router'
import router from './router.js'
import Vuetify from 'vuetify'
import App from './src/app.vue'

// vuetify
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
  })
})
