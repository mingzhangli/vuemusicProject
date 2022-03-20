import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mid: '',
    userId: localStorage.getItem('userId')
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
