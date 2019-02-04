<template>
  <header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <router-link to="/">
          <a class="logo">
            <b>WHINGLE</b>
          </a>
          </router-link>
        </div>
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
         
        </div>
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
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
            <li>
              <router-link to="/register" v-if="!loggedIn">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/login" v-if="!loggedIn">
                <a class="button is-light">
                  <strong>Log in</strong>
                </a>
              </router-link>
            </li>
            <li>
              <a v-if="loggedIn" class="button is-danger" @click="doLogout">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
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
  text-align: left
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
</style>
