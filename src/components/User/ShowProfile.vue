<template>
  <div class="row">
    <modalConfirm :question=question @modalAction="againInterest($event, false)"></modalConfirm>
    
    <div class="col-md-10">
      <div
        v-if="status"
        v-bind:class="[activeClass]"
        class="callout"
        style="margin-bottom: 0!important;"
      >{{status}}</div>
    </div>
    <div class="col-md-10">
      <button @click="isOpen = !isOpen">Send Message</button> | 
      <a href="#" @click.prevent="expressInterest(true)">Express Interest</a>  | 
      <a href="#" @click.prevent="addToFav()">Add to favourites</a> | 
      <a href="#" @click.prevent="sendRequest('C')">Request Contacts</a> |
      <a href="#" @click.prevent="sendRequest('H')">Request Horoscope</a> |
      <a href="#" @click.prevent="sendRequest('P')">Request Photo</a> | Print | Report
    </div>
    <div class="col-md-10" id="sendMessage" v-show="isOpen">
      <sendMessage :open=isOpen @closeMessaging="isOpen = $event"></sendMessage>
    </div>
    <hr>
    <!-- {{profile.created_by}} -->
    
    <div class="col-md-3">
      Created by:
      <b>{{ getKeyVal(profile.created_by,'created_by') }}</b>
    </div>
    <div class="col-md-3">
      Name:
      <b>{{profile.name}}</b>
    </div>
    <div class="col-md-3">
      Age:
      <b>{{ getAge(profile.dob) }}</b>
    </div>
    <div class="col-md-3">
      Gender:
      <b>{{ getKeyVal(profile.gender,'gender') }}</b>
    </div>
    <div class="col-md-3">
      Marital Status:
      <b>{{ getKeyVal(profile.marital_status,'marital') }}</b>
    </div>
    <div class="col-md-3">
      Have children:
      <b>{{ getKeyVal(profile.has_children,'yesNo') }}</b>
    </div>
    <div class="col-md-3">
      Staying with me:
      <b>{{getKeyVal(profile.staying_with, 'yesNo')}}</b>
    </div>
    <div class="col-md-3">
      Last Online:
      <b>{{ lastLogin(profile.user.online)}}</b>
    </div>

    <div class="col-md-3">
      Mother Tongue:
      <b>{{profile.mother_tongue.name}}</b>
    </div>
    <div class="col-md-3">
      Religion:
      <b>{{profile.religion.name}}</b>
    </div>
    <div class="col-md-3">
      Caste:
      <b>{{profile.caste.name}}</b>
    </div>
    <div class="col-md-3">
      Star:
      <b>{{ getKeyVal(profile.star,'star') }}</b>
    </div>
    <div class="col-md-3">
      Moon sign:
      <b>{{ getKeyVal(profile.moon_sign,'moon_sign') }}</b>
    </div>
    <div class="col-md-3">
      manglik:
      <b>{{ getKeyVal(profile.manglik,'manglik') }}</b>
    </div>
    <div class="col-md-3">
      horoscope match required?:
      <b>{{ getKeyVal(profile.horoscope,'horoscope') }}</b>
    </div>
    <div class="col-md-3">
      education:
      <b>{{profile.education}}</b>
    </div>
    <div class="col-md-3">
      education in
      <b>{{profile.education_in}}</b>
    </div>
    <div class="col-md-3">
      job:
      <b>{{profile.job}}</b>
    </div>
    <div class="col-md-3">
      Working as:
      <b>{{profile.job_as}}</b>
    </div>
    <div class="col-md-3">
      income:
      <b>{{profile.income}}</b>
    </div>

    <div class="col-md-3">
      height:
      <b>{{ getKeyVal(profile.height,'height') }}</b>
    </div>
    <div class="col-md-3">
      weight:
      <b>{{ getKeyVal(profile.weight,'weight') }}</b>
    </div>
    <div class="col-md-3">
      build:
      <b>{{ getKeyVal(profile.build,'build') }}</b>
    </div>
    <div class="col-md-3">
      complexion:
      <b>{{ getKeyVal(profile.complexion,'complexion') }}</b>
    </div>
    <div class="col-md-3">
      blood group:
      <b>{{ getKeyVal(profile.blood_group,'blood_group') }}</b>
    </div>
    <div class="col-md-3">
      disability:
      <b>{{ getKeyVal(profile.disability,'disability') }}</b>
    </div>
    <div class="col-md-3">
      diet:
      <b>{{ getKeyVal(profile.diet,'diet') }}</b>
    </div>
    <div class="col-md-3">
      smoke:
      <b>{{ getKeyVal(profile.smoke,'smoke') }}</b>
    </div>
    <div class="col-md-3">
      drink:
      <b>{{ getKeyVal(profile.drink,'drink') }}</b>
    </div>
    <div class="col-md-3">
      father:
      <b>{{ getKeyVal(profile.father,'father') }}</b>
    </div>
    <div class="col-md-3">
      mother:
      <b>{{ getKeyVal(profile.mother,'mother') }}</b>
    </div>
    <div class="col-md-3">
      brothers:
      <b>{{ getKeyVal(profile.brothers,'bro_sis') }}</b>
    </div>
    <div class="col-md-3">
      brothers married:
      <b>{{ getKeyVal(profile.sisters_married,'bro_sis') }}</b>
    </div>
    <div class="col-md-3">
      sisters:
      <b>{{ getKeyVal(profile.sisters,'bro_sis') }}</b>
    </div>
    <div class="col-md-3">
      sisters married:
      <b>{{ getKeyVal(profile.sisters_married,'bro_sis') }}</b>
    </div>
    <div class="col-md-3">
      family type:
      <b>{{ getKeyVal(profile.family_type,'family_type') }}</b>
    </div>
    <div class="col-md-3">
      family status:
      <b>{{ getKeyVal(profile.family_status,'family_status') }}</b>
    </div>
    <div class="col-md-3">
      family_values:
      <b>{{ getKeyVal(profile.family_values,'family_values') }}</b>
    </div>
    <div class="col-md-3">
      hobbies:
      <b>{{profile.hobbies}}</b>
    </div>
    <div class="col-md-3">
      interests:
      <b>{{profile.intererts}}</b>
    </div>
    <div class="col-md-3">
      Country:
      <b>{{profile.country.name}}</b>
    </div>
    <div class="col-md-3">
      State:
      <b>{{profile.state.name}}</b>
    </div>
    <div class="col-md-3">
      City:
      <b>{{profile.city.name}}</b>
    </div>
    <div class="col-md-10">
      About:
      <b>{{profile.about}}</b>
    </div>
  </div>
</template>
<script>
import ApiService from "../../services/api.service.js";
import helper from "../Services/helper.js";
import SendMessage from './SendMessage'
import ModalConfirm from '../Shared/ModalConfirm'
export default {
  data() {
    return {
      activeClass: "",
      status: "",
      isOpen: false,
      message: "",
      name: "",
      question: '',
      profile: {
        religion: {},
        caste: {},
        user: {},
        country: {},
        state: {},
        city: {},
        mother_tongue: {}
      }
    };
  },
  components: { 
    SendMessage,
    ModalConfirm
  },
  beforeCreate() {
    this.$store.commit("config/setHeading", "Profile");
    ApiService.get("/show/" + this.$route.params.id)
      .then(r => {
        this.profile = r.data;
      })
      .catch(e => {
        this.activeClass = "callout-danger";
        this.status = "Record not found";
      });
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    sendRequest(type) {
      ApiService.post("sendRequest", {
        id: this.$route.params.id,
        type: type,
        check: true
      }).then(r => {
        this.$notify({
          group: "foo",
          type: "success",
          title:  this.$t('success') ,
          text: r.data.message 
        });
      }).catch(e => {
        this.$notify({
            group: "foo",
            type: "error",
            title:  this.$t('error') ,
            text: e.response.data.message
        });
      })
    },
    addToFav() {
      ApiService.post("addToFavourite", {
        id: this.$route.params.id
      }).then(r => {
        this.$notify({
          group: "foo",
          type: "success",
          title:  this.$t('success') ,
          text: r.data.message 
        });
      }).catch(e => {
        this.$notify({
            group: "foo",
            type: "error",
            title:  this.$t('error') ,
            text: e.response.data.message
        });
      })
    },
    expressInterest(checkExist) {
      ApiService.post("sendInterest", {
        id: this.$route.params.id,
        check: checkExist
      })
        .then(r => {
          // If previous interest exists
          if(checkExist) {
            if(r.data.exists) {
              this.$modal.show('m-confirm', { question: this.$t('interest_again') });
            } else {
              this.$notify({
                group: "foo",
                type: "success",
                title:  this.$t('interest_sent_success') ,
                text: r.data.message
              });
            }
          } else {
            this.$notify({
              group: "foo",
              type: "success",
              title:  this.$t('interest_sent_success') ,
              text: r.data.message
            });
          }
        })
        .catch(e => {
          this.$notify({
            group: "foo",
            type: "error",
            title:  this.$t('error') ,
            text: e.response.data.message
          });
        });
    },
    againInterest(val, checkExist) {
      if(val.userAction) this.expressInterest(checkExist)
    },
    getKeyVal(key, arrKey) {
      return helper.getValueByKey(key, arrKey);
    },
    getAge(dob) {
      return helper.getAge(dob);
    },
    lastLogin(val) {
      return helper.getLastLogin(val);
    },
    cancelSend() {
      this.isOpen = false;
      this.$validator.reset();
    },
  }
};
</script>
