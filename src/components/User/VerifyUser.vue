<template>
  <div>
    <div v-if="message"
                v-bind:class="[activeClass]"
                class="callout"
                style="margin-bottom: 0!important;"
              >{{message}}</div>
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
          this.activeClass = "callout-success";
        })
        .catch(e => {
          this.message = e.response.data.message;
          this.activeClass = "callout-danger";
        });
    }
  }
};
</script>
