import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import gx from '../components/home/gx.vue'
import zs from '../components/home/zs.vue'
import gd from '../components/home/gd.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home/gx'
  },
  {
    path: '/Home',
    component: Home,
    children: [
      { path: 'gx', component: gx },
      { path: 'zs', component: zs },
      { path: 'gd', component: gd },
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
