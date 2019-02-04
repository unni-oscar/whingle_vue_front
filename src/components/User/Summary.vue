<template>
  <div>
    <!-- Top row -->
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-aqua">
            <i class="fa fa-commenting"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Messages</span>
            <span class="info-box-number">
              90
              <small>(12 New)</small>
            </span>
            <div class="pull-right">
              <router-link to="/user/messages">
                <a>View all</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-red">
            <i class="fa fa-smile-o"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Interests</span>
            <span class="info-box-number">41
              <small>(8 New)</small>
            </span>
            <div class="pull-right">
              <router-link to="/user/interests">
                <a>View all</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="clearfix visible-sm-block"></div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-green">
            <i class="fa fa-handshake-o"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Requests</span>
            <span class="info-box-number">760
              <small>(1 New)</small>
            </span>
            <div class="pull-right">
              <router-link to="/user/requests">
                <a>View all</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="info-box">
          <span class="info-box-icon bg-yellow">
            <i class="fa fa-star"></i>
          </span>
          <div class="info-box-content">
            <span class="info-box-text">Favourites</span>
            <span class="info-box-number">&nbsp;</span>
            <div class="pull-right">
              <router-link to="/user/interests">
                <a>View all</a>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End: Top row -->
    My email : {{email}}
  </div>
</template>
<script>
import UserService from "../../services/user.service.js";
export default {
  data() {
    return {
      email: ""
    };
  },
  beforeCreate() {
    this.$store.commit("config/setHeading", "Dashboard");
  },
  created() {
    UserService.getUser()
      .then(res => {
        const resp = res.data;
        this.email = resp.data.email;
      })
      .catch(e => {});
  }
};
</script>
<style scoped>
.info-box-number {
  font-weight: normal;
}
</style>
