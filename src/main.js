import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import money from 'v-money'

import './scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  money,
  render: h => h(App)
}).$mount('#app')
