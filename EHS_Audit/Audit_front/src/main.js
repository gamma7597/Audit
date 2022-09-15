import Vue from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import BootstrapVue from 'bootstrap-vue'

import { MazPhoneNumberInput } from 'maz-ui'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(BootstrapVue)

Vue.use(MazPhoneNumberInput)

Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
