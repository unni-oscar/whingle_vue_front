<template>
  <div id="wrapper" style="height: auto; min-height: 100%;">
    <wh-header></wh-header>
    <div class="content-wrapper" style="min-height: 254px;">
      <div class="container">
        <section class="content-header"></section>
        <section>
          <router-view></router-view>
        </section>
      </div>
    </div>
    
    <wh-footer></wh-footer>
  </div>
</template>
<script>
import Header from "@/components/Shared/DefaultHeader";
import Footer from "@/components/Shared/Footer";

export default {
  components: {
    "wh-header": Header,
    "wh-footer": Footer
  }
};
</script>
