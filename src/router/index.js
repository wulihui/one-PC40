import Vue from 'vue'
import VueRouter from 'vue-router'
import UseElement from '../views/useElement'
import Home from '../views/home'
import Login from '../views/login'
import Layout from '../views/layout'
import Publish from '../views/publish'
import List from '../views/article/list'
// 导入 nprogress
import nprogress from 'nprogress'
// 导入样式文件
import 'nprogress/nprogress.css'

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
      },
      // 文章路由
      {
        path: '/article/list',
        component: List
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

// router: 路由对象
// 给路由对象添加导航守卫: 全局前置导航守卫
// 当由一个路由跳转到另一路由时执行
//  to: 要到达目标路由
//  from: 发起跳转的路由
//  next: 函数,是否执行后续代码
router.beforeEach((to, from, next) => {
  // 开启进度条
  nprogress.start()
  // 说明请求的路由发生了改变
  // 排除跳转到登录页面
  if (to.path !== '/login') {
    // 得到localStorage中的userinfo
    const userInfo = window.localStorage.getItem('userInfo')
    // 判断用户是否登录
    if (!userInfo) {
      // 不存在说明用户没有登录,应该跳转到登录页面上去
      router.push('/login')
    } else {
      next()// 执行后续代码
    }
  } else {
    next()// 执行后续代码
  }
})
// 在全局后置钩子中关闭进度条
router.afterEach((to, from) => {
  nprogress.done()
})

export default router
