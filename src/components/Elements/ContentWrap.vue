<template>
  <!-- Content Wrapper. Contains page content -->
  <div id="content-wrap" class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        {{pageHeading}}
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li> <router-link to="/" ><a href="#"><i class="fa fa-dashboard"></i> Home</a></router-link></li>
        <li class="active">Dashboard</li>
      </ol>
    </section>

    <section class="content">
      <transition name="page" mode="out-in">
        <router-view name="mainarea"> </router-view>
      </transition>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'va-content-wrap',
   beforeCreate () {
        this.$store.commit('config/setLayout', 'user')
    },
  created () {

  },
  computed: {
    ...mapGetters({ head: "config/getHeading" }),
    pageHeading() {
      return this.head;
    }
  },
}
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}
.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
