<template>
  <div class="row">
    <div class="col-md-6">
      <div class="box box-primary">
        <div class="box-header with-border">
          <h3 class="box-title">Change Password</h3>
        </div>
        <form role="form" @submit.prevent="handleSubmit">
          <div
            v-if="message"
            v-bind:class="[activeClass]"
            class="callout"
            style="margin-bottom: 0!important;"
          >{{message}}</div>
          <div class="box-body">
            <div class="form-group">
              <label for="exampleInputEmail1">Old Password</label>
              <input
                class="form-control"
                name="oldPassword"
                type="password"
                v-model="formData.oldPassword"
                placeholder="Enter Old Password"
                v-validate="'required'"
              >
              <span
                class="help-block text-red"
                v-show="errors.has('oldPassword')"
              >{{ errors.first('oldPassword') }}</span>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">New Password</label>
              <input
                class="form-control"
                name="newPassword"
                type="password"
                ref="password"
                v-model="formData.newPassword"
                placeholder="Enter Old Password"
                v-validate="'required|min:5|max:30'"
              >
              <span
                class="help-block text-red"
                v-show="errors.has('newPassword')"
              >{{ errors.first('newPassword') }}</span>
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Confirm Password</label>
              <input
                class="form-control"
                name="confirmPassword"
                type="password"
                v-model="formData.confirmPassword"
                placeholder="Confirm password"
                v-validate="'required|confirmed:password'"
              >
              <span
                class="help-block text-red"
                v-show="errors.has('confirmPassword')"
              >{{ errors.first('confirmPassword') }}</span>
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
  beforeCreate () {
        this.$store.commit('config/setHeading', 'Change Password')
    },
  methods: {
    handleSubmit(event) {
      this.message = "";
      this.errors.clear();
      this.$validator.validateAll().then(res => {
        if (res) {
          UserService.changePassword(this.formData)
            .then(res => {
              this.message = res.data.message;
              this.activeClass = "callout-success";
              this.formData.oldPassword = this.formData.newPassword = this.formData.confirmPassword =
                "";
              this.$validator.reset();
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
