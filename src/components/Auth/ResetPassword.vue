<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <div v-bind:class="[activeClass]" class="notification">{{message}}</div>
        <form @submit.prevent="handleSubmit">
          <h1 class="title">Forget password</h1>
          <div class="columns is-vcentered">
            <div class="column is-5">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    v-model="email"
                    type="text"
                    name="email"
                    v-validate="'required|email'"
                    placeholder="Email"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <p
                    v-show="errors.has('email')"
                    class="has-text-danger"
                  >{{ errors.first('email') }}</p>
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
import UserService from "../../services/user.service.js";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      activeClass: "",
      message: ""
    };
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),

    doLogout() {
      this.logout();
    },
    handleSubmit() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.doLogout();
          UserService.resetPassword({ email: this.email })
            .then(res => {
              this.message = res.data.message;
              this.activeClass = "is-success";
            })
            .catch(e => {
              // Adding error to error bag
              this.errors.add({
                field: "email",
                msg: e.response.data.message
              });
            });
        }
      });
    }
  }
};
</script>
