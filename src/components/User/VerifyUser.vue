<template>
  <div>
    <div v-bind:class="[activeClass]" class="notification">{{message}}</div>
  </div>
</template>
<script>
import UserService from "../../services/user.service.js";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      activeClass: "",
      message: "",    
    };
  },
  mounted(){
      this.verifyUser({email: this.$route.params.email,token: this.$route.params.key})
  },
  methods: {
    ...mapActions({ logout: "auth/logout" }),

    doLogout() {
      this.logout();
    },
    verifyUser (userData) {
      this.doLogout();
      UserService.verify(userData)
        .then(res => {          
          this.message = res.data.message;
          this.activeClass = "is-success";
        })
        .catch(e => {
          this.message = e.response.data.message;
          this.activeClass = "is-danger";
        });
    }
  }
};
</script>
