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
                <label class="label">Old Password</label>
                <div class="control">
                  <input
                    class="input"
                    name="oldPassword"
                    type="password"
                    v-model="formData.oldPassword"
                    placeholder="Old Password"
                    v-validate="'required'"     
                  >
                  <p
                    v-show="errors.has('oldPassword')"
                    class="has-text-danger"
                  >{{ errors.first('oldPassword') }}</p>
                </div>
              </div>
              <div class="field">
                <label class="label">New Password</label>
                <div class="control">
                  <input
                    class="input"
                    name="newPassword"
                    type="password"
                    ref="password"
                    v-model="formData.newPassword"
                    placeholder="Old Password"
                    v-validate="'required|min:5|max:30'"    
                  >
                  <p
                    v-show="errors.has('newPassword')"
                    class="has-text-danger"
                  >{{ errors.first('newPassword') }}</p>
                </div>
              </div>
              <div class="field">
                <label class="label">Confirm Password</label>
                <div class="control">
                  <input
                    class="input"
                    name="confirmPassword"
                    type="password"
                    v-model="formData.confirmPassword"
                    placeholder="Confirm password"
                    v-validate="'required|confirmed:password'"
                  >
                  <p
                    v-show="errors.has('confirmPassword')"
                    class="has-text-danger"
                  >{{ errors.first('confirmPassword') }}</p>
                </div>
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
export default {
  data() {
    return {
      formData: {
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
      },
      activeClass: "",
      message: ""
    };
  },
  methods: {
    handleSubmit(event) {
      this.errors.clear();
      this.$validator.validateAll().then(res => {
        if (res) {
          UserService.changePassword(this.formData)
            .then(res => {
              console.log("suceess");
              this.message = res.data.message;
              this.activeClass = "is-success";
              this.formData.oldPassword = this.formData.newPassword = this.formData.confirmPassword =
                "";
            })
            .catch(e => {
              var err = e.response.data.message;
              let vm = this;
              // Adding error to error bag
              Object.keys(err).forEach(function(item) {
                vm.errors.add({
                  field: item,
                  msg: err[item][0]
                });
              });
            });
        }
      });
    }
  }
};
</script>
