import Vue from 'vue'
import VueRouter from 'vue-router'
import UseElement from '../views/useElement'
import Home from '../views/home'
import Login from '../views/login'
import Layout from '../views/layout'
import Publish from '../views/publish'

Vue.use(VueRouter)

const routes = [
  // 根据目录的重定向
  {
    path: '/',
    redirect: '/home'
  },
  // 测试路由
  {
    path: '/useElement',
    name: 'useElement',
    component: UseElement
  },
  // 登录路由
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // 布局路由
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
    // 添加它的子路由
    children: [
      // 将home作为layout的子路由存在
      {
        path: '/home',
        component: Home
      },
      // 添加一个publish路由
      {
        path: '/publish',
        component: Publish
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
