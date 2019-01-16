<template>
  <div>
    <wh-header></wh-header>
    <router-view></router-view>
    <wh-footer></wh-footer>
  </div>
</template>
<script>
import Header from '@/components/Shared/Header'
import Footer from '@/components/Shared/Footer'

export default {
  components: {
    'wh-header': Header,
    'wh-footer': Footer
  }
}
</script>
