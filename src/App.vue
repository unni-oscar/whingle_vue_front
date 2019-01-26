<template>
  <div>
    <component v-bind:is="whichLayout"></component>
    Layout used: <strong>{{ whichLayout }}</strong>
  </div>

</template>
<script>
import { mapGetters } from "vuex"
import Default from './components/Layouts/Default'
import UserLayout from './components/Layouts/User'
import axios from 'axios'
export default {
  name: 'App',
  computed: {
    ...mapGetters(
      { layout : 'config/layout' }
    ),
    whichLayout () {
      return this.layout
    }
  },
  components: {
    'default': Default,
    'user': UserLayout
  },
  created(){
    axios.interceptors.response.use(
      response => response,
      error => {
        const {status, config} = error.response;
        console.log(error.response)
        if (status === 401 && config && !config.__isRetryRequest ) {
          this.$store.dispatch('auth/logout')
        } 
        return Promise.reject(error);
      }
    )
  }
}
</script>
