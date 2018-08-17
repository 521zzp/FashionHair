import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: null,
    token: '',
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    home
  },
})

export default store
