<template>
  <header class="main-header">
    <!-- Logo -->
    <router-link to="/">
      <a class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">
          <b>W</b>S
        </span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg">
          <b>WHINGLE</b>.com
        </span>
      </a>
    </router-link>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="javascript.void(0)" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <ul class="nav navbar-nav">
             <li>
              <router-link to="/">
                <a class="navbar-item">Home</a>
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                <a class="navbar-item">About</a>
              </router-link>
            </li>
            <li>
              <router-link to="/search">
                <a class="navbar-item">Search</a>
              </router-link>
            </li>
            <li>
              <router-link to="/pricing">
                <a class="navbar-item">Pricing</a>
              </router-link>
            </li>
            <li>
              <router-link to="/user">
                <a class="navbar-item">Dashboard</a>
              </router-link>
            </li>
          </ul>
          
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">
          <!-- Messages: style can be found in dropdown.less-->
          <li class="dropdown messages-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-envelope-o"></i>
              <span class="label label-success">3</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 messages</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <!-- start message -->
                    <a href="#">
                      <div class="pull-left">
                        <img
                          src="~admin-lte/dist/img/user2-160x160.jpg"
                          class="img-circle"
                          alt="User Image"
                        >
                      </div>
                      <h4>
                        Support Team
                        <small>
                          <i class="fa fa-clock-o"></i> 5 mins
                        </small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <!-- end message -->
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img
                          src="~admin-lte/dist/img/user3-128x128.jpg"
                          class="img-circle"
                          alt="User Image"
                        >
                      </div>
                      <h4>
                        AdminLTE Design Team
                        <small>
                          <i class="fa fa-clock-o"></i> 2 hours
                        </small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img
                          src="~admin-lte/dist/img/user4-128x128.jpg"
                          class="img-circle"
                          alt="User Image"
                        >
                      </div>
                      <h4>
                        Developers
                        <small>
                          <i class="fa fa-clock-o"></i> Today
                        </small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img
                          src="~admin-lte/dist/img/user3-128x128.jpg"
                          class="img-circle"
                          alt="User Image"
                        >
                      </div>
                      <h4>
                        Sales Department
                        <small>
                          <i class="fa fa-clock-o"></i> Yesterday
                        </small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div class="pull-left">
                        <img
                          src="~admin-lte/dist/img/user4-128x128.jpg"
                          class="img-circle"
                          alt="User Image"
                        >
                      </div>
                      <h4>
                        Reviewers
                        <small>
                          <i class="fa fa-clock-o"></i> 2 days
                        </small>
                      </h4>
                      <p>Why not buy a new awesome theme?</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer">
                <a href="#">See All Messages</a>
              </li>
            </ul>
          </li>
          <!-- Notifications: style can be found in dropdown.less -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 notifications</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-aqua"></i> 5 new members joined today
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-warning text-yellow"></i> Very long description here that may not fit into the
                      page and may cause design problems
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-users text-red"></i> 5 new members joined
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-shopping-cart text-green"></i> 25 sales made
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa fa-user text-red"></i> You changed your username
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all</a>
              </li>
            </ul>
          </li>
          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">4</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">You have 4 tasks</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li>
                    <!-- Task item -->
                    <a href="#">
                      <h3>
                        Design some buttons
                        <small class="pull-right">20%</small>
                      </h3>
                      <div class="progress xs">
                        <div
                          class="progress-bar progress-bar-aqua"
                          style="width: 20%"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span class="sr-only">20% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li>
                    <!-- Task item -->
                    <a href="#">
                      <h3>
                        Create a nice theme
                        <small class="pull-right">40%</small>
                      </h3>
                      <div class="progress xs">
                        <div
                          class="progress-bar progress-bar-green"
                          style="width: 40%"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span class="sr-only">40% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li>
                    <!-- Task item -->
                    <a href="#">
                      <h3>
                        Some task I need to do
                        <small class="pull-right">60%</small>
                      </h3>
                      <div class="progress xs">
                        <div
                          class="progress-bar progress-bar-red"
                          style="width: 60%"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span class="sr-only">60% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                  <li>
                    <!-- Task item -->
                    <a href="#">
                      <h3>
                        Make beautiful transitions
                        <small class="pull-right">80%</small>
                      </h3>
                      <div class="progress xs">
                        <div
                          class="progress-bar progress-bar-yellow"
                          style="width: 80%"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <span class="sr-only">80% Complete</span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>
          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="~admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">Unni</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img
                  src="~admin-lte/dist/img/user2-160x160.jpg"
                  class="img-circle"
                  alt="User Image"
                >

                <p>
                  Unni - Manager
                  <small>today date</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <row>
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </row>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a
                    href="javascript:void(0)"
                    @click="doLogout"
                    class="btn btn-default btn-flat"
                  >Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar">
              <i class="fa fa-gears"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <!-- <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <router-link to="/">
            <a class="navbar-item" >
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </a>
        </router-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/about"><a class="navbar-item">About</a></router-link>
        <router-link to="/search"><a class="navbar-item">Search</a></router-link>
        <router-link to="/pricing"><a class="navbar-item">Pricing</a></router-link>
        <router-link to="/user"><a class="navbar-item">Dashboard</a></router-link>
        <router-link to="/user/profile"><a class="navbar-item">Profile</a></router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/register" v-if="!loggedIn">
                <a class="button is-primary">
                <strong>Sign up</strong>
                </a>
            </router-link>
            <router-link to="/login" v-if="!loggedIn">
                <a class="button is-light">Log in</a>
            </router-link>
                <a v-if="loggedIn" class="button is-danger" @click="doLogout">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </nav>-->
</template>
<script>
import { store } from "../../store";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapGetters({ authenticated: "auth/loggedIn" }),
    loggedIn() {
      return this.authenticated;
    }
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),

    doLogout() {
      this.logout();
      this.$router.replace("/login");
    }
  }
  // On logout store.commit('logout) and then redirect to login page with a success message
};
</script>


<style scoped>
.main-header .logo {
}
.skin-blue .main-header .logo {
  background-color: #fff;
  color:#248db8
}
a {
  color: #a7a7a7
}
a:hover {
  color: #248db8;
}
.navbar-custom-menu>.navbar-nav>li:hover {
  background-color: #fff;

}
.skin-blue .main-header .navbar {
  background-color: #fff;
  border-bottom: 1px solid #eaa151
}
.skin-blue .main-header .navbar .nav>li>a {
  color: #a7a7a7
}
.skin-blue .main-header .navbar .sidebar-toggle {
  color: #a7a7a7
}
.skin-blue .main-header .navbar .sidebar-toggle:hover {
  background-color: #fff;
  color:#248db8;
}
</style>

