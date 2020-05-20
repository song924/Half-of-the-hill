import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
/* import { Switch } from 'iview'
Vue.component('i-switch', Switch)
import { Circle } from 'iview'
Vue.component('i-circle', Circle) */

Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
