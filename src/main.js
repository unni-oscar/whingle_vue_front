// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import  { store }  from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import VeeValidate from 'vee-validate'

Vue.use(Buefy)
Vue.use(VeeValidate)

Vue.config.productionTip = false

// Set the base URL of the API
ApiService.init(process.env.API_URL)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
