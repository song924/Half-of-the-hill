import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

import VueSocketIO from 'vue-socket.io'
import socketio from 'socket.io-client';
import Axios from 'axios';

Vue.use(new VueSocketIO({

  debug: true,

  connection: socketio('http://129.204.239.117:3000/')

}))

/* import { Switch } from 'iview'
Vue.component('i-switch', Switch)
import { Circle } from 'iview'
Vue.component('i-circle', Circle) */
axios.defaults.baseURL = 'http://129.204.239.117:3000/';
Vue.use(ViewUI);
Vue.config.productionTip = false
Vue.prototype.axios = axios;

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.isLogin)) {
    if (store.state.token) {
      next()
    } else {
      next({
        path: "/login",
      })
    }
  } else {
    next()
  }
})


//axios请求拦截器
Axios.interceptors.request.use(config =>{
  //判断是否存在token，存在就添加header
  if(store.state.token){
    config.headers.common["token"] = store.state.token
  }
  return config;
},error=>{
  console.log(error)
})




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
