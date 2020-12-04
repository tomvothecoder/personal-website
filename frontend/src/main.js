import AOS from 'aos';
import 'aos/dist/aos.css';
import Vue from 'vue';
import VueGtag from 'vue-gtag';
import '../node_modules/bulma/css/bulma.css';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
const VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  duration: 1200
});

Vue.use(
  VueGtag,
  {
    config: {
      id: process.env.VUE_APP_GOOGLE_ANALYTICS_UA
    }
  },
  router
);

new Vue({
  created() {
    AOS.init({
      once: true
    });
  },
  router,
  render: h => h(App)
}).$mount('#app');
