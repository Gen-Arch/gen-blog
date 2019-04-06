import Vue from 'vue/dist/vue.esm'
import VueRouter from 'vue-router';
import Index from './src/pages/index.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
});

export default router;
