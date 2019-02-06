<template>
  <div class="row">
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Forget password</h3>
        </div>
        <form role="form" @submit.prevent="handleSubmit">
          <div class="box-body">
            <div class="form-group">
              <div v-if="message"
                v-bind:class="[activeClass]"
                class="callout"
                style="margin-bottom: 0!important;"
              >{{message}}</div>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                    class="form-control"
                    v-model="email"
                    type="text"
                    name="email"
                    v-validate="'required|email'"
                    placeholder="Enter email"
                  >
              <span class="help-block text-red" v-show="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
             <div class="form-group">
                <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
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
              this.activeClass = "callout-success";
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
