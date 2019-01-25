<template>
  <div>
    <wh-header></wh-header>
    <br>
    <router-view> </router-view>
    <wh-footer></wh-footer>
  </div>
</template>
<script>
import Header from '@/components/Shared/Header'
import Footer from '@/components/Shared/Footer'
export default {
  name: 'User',
  components: {
    'wh-header': Header,
    'wh-footer': Footer
  }
}
</script>
