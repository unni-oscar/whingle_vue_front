<template>
  <div class="row">
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Login</h3>
        </div>
        <form role="form" @submit.prevent="handleSubmit">
          <div class="box-body">
            <div class="form-group">
              <div
                v-if="authenticationError"
                class="callout callout-danger"
                style="margin-bottom: 0!important;"
              >{{authenticationError}}</div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input class="form-control" v-model="email" type="text" placeholder="Enter email">
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Enter password"
                v-model="password"
              >
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
            </div>
            <div class="form-group">
              <router-link to="/reset-password">
                <a class="navbar-item">Forget password?</a>
              </router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import { mapGetters, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "unni@gmail.com",
      password: "secret",
      submitted: false
    };
  },
  computed: {
    ...mapGetters({
      authenticationError: "auth/authenticationError"
    })
  },
  methods: {
    ...mapActions({ login: "auth/login" }),

    handleSubmit() {
      // Call login service and emit store function and then redirect to to.actualPath
      const { email, password } = this;
      if ("" != email && "" != password) {
        this.login({ email, password });
        this.password = "";
      }
    }
  }
};
</script>
