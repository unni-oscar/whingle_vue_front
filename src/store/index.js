import Vue from 'vue'
import Vuex from 'vuex'
// import { getCurrentUser } from '../helpers/auth'
import { config } from './config.module'
import { auth } from './auth.module'

Vue.use(Vuex)

// const user = getCurrentUser()

export const store = new Vuex.Store({
  modules: {
    config,
    auth
  }
})
