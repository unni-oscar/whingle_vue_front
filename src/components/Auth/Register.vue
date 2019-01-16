<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <form>
        <h1 class="title">Register</h1>
        <div class="columns is-vcentered">
          <div class="column is-5">
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input class="input" type="text" v-model="name" placeholder="name">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </div>
              <!-- <p class="help">This username is available</p> -->
            </div>
            <div class="field">
              <div class="control">
                <label class="radio">
                  <input type="radio" name="gender">
                  Male
                </label>
                <label class="radio">
                  <input type="radio" name="gender">
                  Female
                </label>
              </div>
            </div>
            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input class="input" type="text" v-model="email" placeholder="Email">
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
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox">
                  I agree to the
                  <a href="#">terms and conditions</a>
                </label>
              </div>
            </div>
            <div class="field">
                <button type="submit" class="button is-primary" @click.prevent="handleRegister" >Register</button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    handleRegister () {
      axios.post('http://localhost:8081/api/auth/register',
        {name: this.name, email: this.email, password: this.password},
        {headers: {'X-Requested-With': 'XMLHttpRequest'}},
        {crossdomain: true}
      )
      .then(
        (response) => console.log(response)
      )
      .catch(
        (error) => console.log(error)
      )
    }
  }
}
</script>
