import Vue from 'vue'
import VueRouter from 'vue-router'
import UseElement from '../views/useElement'
import Home from '../views/home'
import Login from '../views/login'
import Layout from '../views/layout'

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
  // 主页路由
  {
    path: '/home',
    name: 'home',
    component: Home
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
    component: Layout
  }
]

const router = new VueRouter({
  routes
})

export default router
