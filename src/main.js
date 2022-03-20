import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import { request } from './network/api'
import './assets/css/base.css'
import axios from 'axios'

Vue.prototype.$request = request


axios.defaults.withCredentials = true;




Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
