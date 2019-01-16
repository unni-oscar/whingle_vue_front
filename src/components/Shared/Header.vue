<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
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
        <span aria-hidden="true">s</span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/about"><a class="navbar-item">About</a></router-link>
        <router-link to="/search"><a class="navbar-item">Search</a></router-link>
        <router-link to="/pricing"><a class="navbar-item">Pricing</a></router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/register">
                <a class="button is-primary">
                <strong>Sign up</strong>
                </a>
            </router-link>
            <router-link to="/login">
                <a class="button is-light">Log in</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {}
</script>
