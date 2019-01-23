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
                <button type="submit" class="button is-primary" value="Submit">Submit</button>
                
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
import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      email: 'unnikrishnanes@gmail.com',
      password: '123456',
      submitted: false
    }
  },
  computed: {
    ...mapGetters( [
      'authenticating',
      'authenticationError',
      'authenticationErrorCode'
    ])
  },
  methods: {
    ...mapActions(
      { login : 'auth/login' }
    ),

    handleSubmit () {
      // Call login service and emit store function and then redirect to to.actualPath
      const { email, password } = this
      if('' != email && '' != password) {
        this.login({email, password})
      }
    }
  }
}
</script>
