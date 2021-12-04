import Vue from 'vue'
import Vuex from 'vuex'
//import Axios from 'axios'
import {store as products} from './../pages/products'
import {store as categories} from './../pages/categories'

import { store as user } from './../pages/login'

Vue.use(Vuex)

/*export default new Vuex.Store({
  state: {
    count: 0,
    products:[]
  },
  mutations: {
    increments(state) {
      state.count++
    },
    addProducts(state, payload) {
      state.products.push(payload)
    }
  },
  actions: {
    addProdutos({ commit }, payload){
      commit('addProducts', payload)
    }
  },
  modules: {
  }
})*/

/*const categories = {
  state: {
    categories:[]
  }
}*/

/*const products = {
  state:{
    products: []
  },
  mutations:{
    getProductsMutation(state, payload){
      state.products = payload
    }
  },
  actions: {
    getProductsAction({commit}){
      Axios.get('http://localhost:8090/products').then(resp => {
        console.log(resp.data)
        commit('getProductsMutation', resp.data)
      })
    }
  }
}*/

const store = new Vuex.Store({
  modules: {
    categories,
    products,
    user
  }
})

export default store