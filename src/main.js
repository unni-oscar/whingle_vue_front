import './lib/css'
import './lib/script'
import './lib/global'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { router } from './router'
import  { store }  from './store'
// import Notifications from 'vue-notification'

// import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'
import VeeValidate from 'vee-validate'
import { i18n } from './lib/i18n'
import { dict } from './lib/customErrorMessages'

// Vue.use(Buefy)
Vue.use(VeeValidate)
// Vue.use(Notifications)
// TODO: Need to get rid of if as its been used twice
import { Validator } from "vee-validate";
Validator.localize('en', dict);

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
  i18n,
  components: { App },
  template: '<App/>'
})
