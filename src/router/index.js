import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import User_setting from '../views/User_setting.vue'

Vue.use(VueRouter)

if (localStorage.getItem('token')) {
    store.commit('set_token', localStorage.getItem('token'))
}
  

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{
      isLogin:true    // 添加该字段，表示进入这个路由是需要登录的
    },
    children:[
      {
        path:'user_setting',
        name:'user_setting',
        component: () => import('../views/User_setting.vue'),
        meta:{isLogin:true}
      },
      {
        path:'chat',
        name:'chat',
        component: () => import('../views/Chat.vue'),
        meta:{isLogin:true}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.NODE_ENV === 'production' ? "./" : "/",
  routes
})



/* router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g;
  const isChunkLoadFailed = error.message.match(pattern);
  if(isChunkLoadFailed){
    // 用路由的replace方法，并没有相当于F5刷新页面，失败的js文件并没有从新请求，会导致一直尝试replace页面导致死循环，而用 location.reload 方法，相当于触发F5刷新页面，虽然用户体验上来说会有刷新加载察觉，但不会导致页面卡死及死循环，从而曲线救国解决该问题
      location.reload();
      // const targetPath = $router.history.pending.fullPath;
      // $router.replace(targetPath);
  }
}) */

export default router
