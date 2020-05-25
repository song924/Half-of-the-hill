import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
// import User_setting from '../views/User_setting.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login
  },
  {
    path: '/index',
    name: 'index',
    component: Home,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    children:[
      {
        path:'user_setting',
        name:'user_setting',
        component: () => import('../views/User_setting.vue')
      },
      {
        path:'chat',
        name:'chat',
        component: () => import('../views/Chat.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
