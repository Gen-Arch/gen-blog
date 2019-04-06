// import Vue from 'vue';
import Vue from 'vue/dist/vue.esm'
import App from './src/app.vue';
import router from './router.js';

new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: { App }
});
