<template>

  <div >
  <div v-if="isPaid">
  <div v-if="isBlacklisted" class="callout callout-danger">This user is not acceppting anymore messages from you!</div>  
  <form v-else role="form" @submit.prevent="sendMessage">
    <div class="box-body">
      <div class="form-group">
        <textarea
          cols="60"
          rows="3"
          id="message"
          name="message"
          v-model="message"
          v-validate="'required|max:500'"
        ></textarea>
        <span
          class="help-block text-red"
          v-show="errors.has('message')"
        >{{ errors.first('message') }}</span>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" value="Submit">Send</button>
        <a href="javascript:void(0)" @click="cancelSend" class="btn btn-default">cancel</a> 
      </div>
    </div>
  </form>
  </div>
  <div v-else class="callout callout-warning">
    You need to upgrade your subscription to send message
    <button>Upgrade Subscription</button>
  </div>
  </div>
</template>
<script>
import ApiService from "../../services/api.service.js";

export default {
    props:{
      open: Boolean
    },
    data() {
    return { 
      message: "",
      name: "",
      isPaid: false,
      isBlacklisted: false
    };
  },
  mounted() {
    ApiService.post('hasMsgPermission', {
      id: this.$route.params.id
    })
    .then(r => {
      console.log(r.data.value)
      this.isPaid = r.data.paid
      this.isBlacklisted = r.data.blacklist
    })
  },
  methods: {
    cancelSend() {
      this.$emit('closeMessaging', !this.open)
      this.message = '';
      this.$validator.reset();

    },
    sendMessage() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // this.$notify({
          //   group: 'foo',
          //   type: 'success',
          //   title: 'Important message',
          //   text: 'Hello user! This is a notification!' + this.$route.params.id
          // });
          
          ApiService.post("sendMessage", {
            id: this.$route.params.id,
            message: this.message
          })
            .then(r => {
              this.$notify({
                group: "foo",
                type: "success",
                title:  this.$t('msg_sent_success') ,
                text: r.data.message
              });
              this.cancelSend();
            })
            .catch(e => {
              console.log(e.response)
              this.$notify({
                group: "foo",
                type: "error",
                title:  this.$t('msg_sent_error') ,
                text: e.response.data.message
              });
            });
        } else {
          // TODO: Catch validation error
        }
      });
    }
  }
};
</script>
