import Vue from 'vue'
import VueRouter from 'vue-router'
import UseElement from '../views/useElement'

Vue.use(VueRouter)

const routes = [
  {
    path: '/useElement',
    name: 'useElement',
    component: UseElement
  }
]

const router = new VueRouter({
  routes
})

export default router
