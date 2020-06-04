import Vue from 'vue'
import store from '../store'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import User_setting from '../views/User_setting.vue'

Vue.use(VueRouter)

//防止页面刷新丢失token
if (localStorage.token) {
    store.commit('set_token', localStorage.token)
}
  

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{isLogin:true},  // 判断该路由是否需要登录权限
    children:[
      {
        path:'index',
        name:'index',
        component: () => import('../views/Index.vue'),
        meta:{isLogin:true}
      },
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
      },
      {
        path:'wuziqi',
        name:'wuziqi',
        component: () => import('../views/game/Wuziqi.vue'),
        meta:{isLogin:true}
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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
