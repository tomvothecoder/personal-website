import Vue from 'vue';
import Router from 'vue-router';
import Career from './views/Career.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dist/index.html',
      redirect: '/career'
    },
    {
      path: '/career',
      name: 'career',
      component: Career
    }
  ]
});
