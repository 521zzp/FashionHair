import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import payment from './modules/payment'
import card from './modules/card'
import order from './modules/order'

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
    home,
    payment,
    card,
    order
  },
})

export default store
