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
  }
}
</script>
