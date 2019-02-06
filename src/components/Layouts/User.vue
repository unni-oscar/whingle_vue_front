<template>
  <div class="wrapper" style="height:auto; min-height:100%">
    <wh-header></wh-header>
    <va-slider :slideMenuItems="slideMenuItems"></va-slider>
    <!-- <va-content-wrap></va-content-wrap> -->
    <!-- <Modal></Modal> -->
    <router-view> </router-view>
    <!-- <wh-footer></wh-footer> -->
  </div>
</template>
<script>
import Header from '@/components/Shared/UserHeader'
// import Footer from '@/components/Shared/Footer'
import VASlider from  '../Elements/Slider'
import slideMenuItems from '../../lib/slideMenuItems.js'
// import VAContentWrap from '../Elements/ContentWrap'
import Model from '../Elements/Modal'
export default {
  name: 'User',
  data () {
    return {
      slideMenuItems: slideMenuItems
    }
  },
  components: {
    'wh-header': Header,
    // 'wh-footer': Footer,
    'va-slider': VASlider,
    //  'va-content-wrap': VAContentWrap,
    //  Modal
  }
}
</script>
