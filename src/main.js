import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client';
Vue.use(new VueSocketIO({

    debug: true,

    connection: socketio('http://129.204.239.117:3000/')

}))

/* import { Switch } from 'iview'
Vue.component('i-switch', Switch)
import { Circle } from 'iview'
Vue.component('i-circle', Circle) */
axios.defaults.baseURL = 'http://129.204.239.117:3000/';
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
