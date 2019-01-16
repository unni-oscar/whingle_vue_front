<template>
  <div>
    <component v-bind:is="layout"></component>
    Layout used: <strong>{{ layout }} </strong>
  </div>

</template>
<script>
import Default from './components/Layouts/Default'
import UserLayout from './components/Layouts/User'

export default {
  name: 'App',
  computed: {
    layout () {
      return this.$store.getters.layout
    },
    currentUser () {
      return this.$store.getters.token
    }
  },
  components: {
    'default': Default,
    'user': UserLayout
  }
}
</script>
