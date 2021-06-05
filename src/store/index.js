import Vue from 'vue'
import Vuex from 'vuex'
import productModule from './modules/product'
import cartModule from "./modules/cart";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    productModule,
    cartModule,
  }
})
