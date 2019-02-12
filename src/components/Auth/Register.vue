<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="box box-primary">
          <div class="box-header with-border">
            <h3 class="box-title">Register</h3>
          </div>
          <form role="form" class="horizontal" @submit.prevent="handleSubmit">
            <div
              v-if="isAuthSuccess"
              class="callout callout-success"
              style="margin-bottom: 0!important;"
            >{{ isAuthSuccess }}</div>
            <div class="box-body" v-if="!isAuthSuccess">
              <div class="form-group">
                <label for="exampleInputEmail1">Profile Created by</label>

                <dropdown
                  cl="col-md-4 form-control"
                  :options="whData.created_by"
                  name="created_by"
                  v-model="profileForm.created_by"
                  validation="required|min_value:1|max_value:6"
                ></dropdown>

                <!-- <span class="help-block text-red" v-show="errors.has('email')">{{ errors.first('email') }}</span> -->
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                  class="form-control"
                  type="text"
                  name="name"
                  id="name"
                  v-validate="'required|alpha_spaces|max:40'"
                  v-model="profileForm.name"
                  placeholder="Name"
                >
                <span class="help-block text-red" v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Date of Birth</label>
                <datepicker
                      format="dd/MM/yyyy"
                      :openDate="openDate"
                      name="dob"
                      :disabledDates="disabledDates"
                      placeholder="Select Date"
                      v-model="profileForm.dob"
                      v-validate="'required|mature'"
                    ></datepicker>
                    {{age}}
                <span class="help-block text-red" v-show="errors.has('dob')">{{ errors.first('dob') }}</span>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Gender</label>
                 <div class="control">
                <radiobutton
                      v-for="channel in whData.gender"
                      name="gender"
                      class=""
                      :rLabel="channel.name"
                      :key="channel.id"
                      v-model="profileForm.gender"
                      :rIndex="channel.id"
                      v-validate="'required|included:1,2'"
                      @change="setValue"
                    ></radiobutton>
                <span class="help-block text-red" v-show="errors.has('gender')">{{ errors.first('gender') }}</span>
                 </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Marital Status</label>
                 <div class="control">
                <radiobutton
                      v-for="channel in whData.marital"
                      name="marital_status"
                      :rLabel="channel.name"
                      :key="channel.id"
                      :rIndex="channel.id"
                      v-model="profileForm.marital_status"
                      v-validate="'required|included:1,2,3'"
                      @change="setValue"
                    ></radiobutton>
                <span class="help-block text-red" v-show="errors.has('marital_status')">{{ errors.first('marital_status') }}</span>
                 </div>
              </div>
               <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                      class="form-control"
                      name="email"
                      id="email"
                      type="text"
                      v-validate="'required|email'"
                      v-model="profileForm.email"
                      placeholder="Email"
                    >
                <span class="help-block text-red" v-show="errors.has('email')">{{ errors.first('email') }}</span>
              </div>
               <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                      class="form-control"
                      name="password"
                      type="password"
                      v-model="profileForm.password"
                      placeholder="Password"
                      v-validate="'required|min:5|max:30'"
                    >
                <span class="help-block text-red" v-show="errors.has('password')">{{ errors.first('password') }}</span>
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-primary" @click.prevent="handleRegister" value="Submit">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>    
  </div>
</template>
<script>
import { store } from "@/store";
import axios from "axios";
// import {mapState, mapMutations} from 'vuex'
import Datepicker from "vuejs-datepicker";
// import DropDown from '../elements/html/DropDown'
// import moment from 'moment'
// import Datepicker from 'vuejs-datepicker';
import moment from "moment";
import Dropdown from "../Elements/Html/Dropdown";
import Radiobutton from "../Elements/Html/RadioButton";

// DOB selectable only if the user has completed 18 year
var oldY = moment()
  .subtract(18, "year")
  .format("YYYY");
var showY = moment()
  .subtract(22, "year")
  .format("YYYY");
// subtracting 1 as the index start from 0
var oldM =
  moment()
    .subtract(18, "year")
    .format("MM") - 1;
var oldD = moment()
  .subtract(18, "year")
  .format("DD");
import DropDown from "../Elements/Html/Dropdown";
import { mapActions } from "vuex";
import {
  UserService,
  AuthenticationError
} from "../../services/user.service.js";

export default {
  data() {
    return {
      disabledDates: {
        from: new Date(oldY, oldM, oldD)
      },
      age: "",
      openDate: new Date(showY, oldM),
      isAuthSuccess: "",
      whData: {},
      profileForm: {
        created_by: "",
        name: "",
        dob: "",
        gender: "",
        marital_status: "",
        email: "",
        password: ""
      }
    };
  },
  watch: {
    "profileForm.dob": function(obj) {
      this.age = moment().diff(moment(obj, "DD/MM/YYYY"), "years") + " Yrs";
    }
  },
  beforeCreate() {
    this.$store.commit("config/setLayout", "default");
  },
  created() {
    this.$validator.extend("mature", {
      getMessage(field, val) {
        return this.$t("years18") 
      },
      validate(value, field) {
        return moment(value).isBefore(moment().subtract(18, "year"));
      }
    });
    // store.commit("setLayout", "user");
  },
  mounted() {
    // https://forum.vuejs.org/t/add-header-token-to-axios-requests-after-login-action-in-vuex/38834
    UserService.getRegisterData()
      .then(resp => {
        this.whData = resp.data.whData;
      })
      .catch(err => {
        //TODO: Catch registration error
        console.log(err);
      });
  },
  methods: {
    ...mapActions({ register: "auth/register" }),
    moment: function() {
      return moment();
    },
    setValue: function(obj) {
      this.profileForm[obj.name] = obj.value;
    },
    handleRegister() {
      this.$validator.validateAll().then(result => {
        if (result) {
          UserService.register(this.profileForm)
            .then(res => {
              this.isAuthSuccess = res.data.message;
            })
            .catch(e => {
              var err = e.response.data.message;
              let vm = this;
              // Adding server side error to veevalidate error bag
              Object.keys(err).forEach(function(item) {
                vm.errors.add({
                  field: item,
                  msg: err[item][0]
                });
              });
            });
        } else {
          // TODO: Catch validation error
        }
      });
      //store.commit("setLayout", "user");
    }
  },
  components: {
    Datepicker,
    dropdown: Dropdown,
    radiobutton: Radiobutton
  }
};
</script>
