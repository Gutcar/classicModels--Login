import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/secure/orders/login',
    alias: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/secure/orders/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/secure/orders/home/monitor-de-ordenes',
    name: 'ordenes',
    component: () =>
      import(/* webpackChunkName: "ordenes" */ '@/views/Ordenes.vue'),
  },
  {
    path: '/secure/orders/home/monitor-de-ordenes/detalles',
    name: 'ordenes-detalle',
    component: () =>
      import(/* webpackChunkName: "ordenes" */ '@/views/OrdenesDetalle.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
