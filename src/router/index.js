import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import gx from '../components/home/gx.vue'
import zs from '../components/home/zs.vue'
import gd from '../components/home/gd.vue'
import phb from '../components/home/phb.vue'
import gs from '../components/home/gs.vue'
import zx from '../components/home/zx.vue'
import xgsd from '../components/home/xgsd.vue'
import xdsj from '../components/home/xdsj.vue'
import search from "../views/search.vue"
import song from '../components/Search/song.vue'
import artist from '../components/Search/artist.vue'
import video from '../components/Search/video.vue'
import gcs from '../components/Search/gcs.vue'
import songlist from '../views/songlist.vue'
import gdpage from '../components/songlist/gdpage.vue'
import commet from '../components/songlist/commet.vue'
import collector from '../components/songlist/collector.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home/gx'
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home,
    children: [
      { path: 'gx', name: 'gx', component: gx },
      { path: 'zs', name: 'zs', component: zs },
      { path: 'gd', name: 'gd', component: gd },
      { path: 'phb', name: 'phb', component: phb },
      { path: 'gs', name: 'gs', component: gs },
      {
        path: 'zx', name: 'zx', component: zx,
        redirect: '/Home/zx/xgsd',
        children: [{ path: 'xgsd', name: 'xgsd', component: xgsd }, { path: 'xdsj', name: 'xdsj', component: xdsj },]
      },
      {
        path: 'search', name: 'search', component: search,
        children: [
          { path: 'song', name: 'song', component: song },
          { path: 'artist', name: 'artist', component: artist },
          { path: 'video', name: 'video', component: video },
          { path: 'gcs', name: 'gcs', component: gcs },
        ]
      },
      {
        path: 'songlist', name: 'songlist', component: songlist,
        children: [
          { path: 'gdpage', name: 'gdpage', component: gdpage, },
          { path: 'commet', name: 'commet', component: commet },
          { path: 'collector', name: 'collector', component: collector }
        ]
      }
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
