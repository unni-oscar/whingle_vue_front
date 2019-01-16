<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <form @submit.prevent="handleSubmit">
          <h1 class="title">Login</h1>
          <div class="columns is-vcentered">
            <div class="column is-5">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" v-model="email" type="text" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input class="input" type="password" v-model="password" placeholder="Password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <a class="button is-primary">Login</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
// import axios from 'axios'
export default {
  data () {
    return {
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    handleSubmit () {
      const { username, password } = this
      console.log(username)
      console.log(password)
    }
  }
}
</script>
