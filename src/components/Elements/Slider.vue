<template>
  <aside id="slider" class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- <div class="user-panel">
        <div class="pull-left image">
          <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>currentUser.name </p>
          <a href="#"><i class="fa fa-circle" :style="`color:green`"></i> Online</a>
        </div>
      </div> -->
      <!-- search form -->
      <!-- <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form> -->
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul data-widget="tree" class="sidebar-menu">
        <va-slide-item
          v-for="(item,index) in slideMenuItems"
          :data="item"
          :key="index"
          :type="item.type"
          :isHeader="item.isHeader"
          :icon="item.icon"
          :name="item.name"
          :badge="item.badge"
          :items="item.items"
          :router="item.router"
          :link="item.link"
        >
        </va-slide-item>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import VASlideItem from './VASlideItem'

export default {
  name: 'va-slider',
  props: {
    slideMenuItems: {
      type: Array,
      default: []
    }
  },
  created () {

  },
  
  components: {
    'va-slide-item': VASlideItem
  }
}
</script>
<style scoped>
.skin-blue .main-header .navbar .sidebar-toggle:hover {
  color: #248db8;
  background-color: #fff;
}
.skin-blue .wrapper, .skin-blue .main-sidebar, .skin-blue .left-side {
  background-color: #fff;
}
.skin-blue .sidebar-menu>li.header {
  background: #fff;
  border-top: 1px solid #f19d5a;
}
</style>
