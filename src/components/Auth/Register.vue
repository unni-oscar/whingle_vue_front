<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        <p v-if="isAuthSuccess" class="has-text-success"> {{ isAuthSuccess }}</p>
        <form v-if="!isAuthSuccess">
          <h1 class="title">Register</h1>
          <div class="columns is-vcentered">
            <div class="column is-5">
               <div class="field">
                <label class="label">Profile Created by</label>
                <div class="control">
                  <div class="select">
                    <!-- <select v-model="profileForm.created_by">
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select> -->
                    <dropdown 
                    cl="col-md-4 form-control" 
                    :options="whData.created_by" 
                    name='created_by' 
                    v-model="profileForm.created_by" 
                    validation="required|min_value:1|max_value:6" ></dropdown>
                  </div>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" name="name" id="name" v-validate="'required|alpha_spaces|max:40'" v-model="profileForm.name" placeholder="Name">
                  <p v-show="errors.has('name')" class="has-text-danger"> {{ errors.first('name') }}</p>

                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Date of Birth</label>
                <div class="control">
                  <!-- <input class="input" type="text" v-model="name" placeholder="name"> -->
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
                  <p v-show="errors.has('dob')" class="has-text-danger"> {{ errors.first('dob') }}</p>
                  <!-- <vuejs-datepicker></vuejs-datepicker> -->
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                 <label class="label">Gender</label>
                <div class="control">
                  <radiobutton v-for="channel in whData.gender" name="gender" :rLabel="channel.name" :key="channel.id" v-model="profileForm.gender"   :rIndex="channel.id"  v-validate="'required|included:1,2'" @change="setValue" ></radiobutton>
                  <p v-show="errors.has('gender')" class="has-text-danger"> {{ errors.first('gender') }}</p>
                </div>
              </div>
              <div class="field">
                <label class="label">Marital status</label>
                <div class="control">
                  <radiobutton v-for="channel in whData.marital" name="marital_status" :rLabel="channel.name" :key="channel.id"  :rIndex="channel.id" v-model="profileForm.marital_status"   v-validate="'required|included:1,2,3'" @change="setValue"></radiobutton>                </div>
                <p v-show="errors.has('marital_status')" class="has-text-danger"> {{ errors.first('marital_status') }}</p>
              </div>
             
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" name="email" id="email" type="text" v-validate="'required|email'" v-model="profileForm.email" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                   <p v-show="errors.has('email')" class="has-text-danger"> {{ errors.first('email') }}</p>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    name="password"
                    type="password"
                    v-model="profileForm.password"
                    placeholder="Password"
                    v-validate="'required|min:5|max:30'"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                   <p v-show="errors.has('password')" class="has-text-danger"> {{ errors.first('password') }}</p>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <!-- <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    I agree to the
                    <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div> -->
              <div class="field">
                <button
                  type="submit"
                  class="button is-primary"
                  @click.prevent="handleRegister"
                >Register</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
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
var oldY = moment().subtract(18, "year").format("YYYY");
var showY = moment().subtract(22, "year").format("YYYY");
// subtracting 1 as the index start from 0
var oldM = moment().subtract(18, "year").format("MM") - 1;
var oldD = moment().subtract(18, "year").format("DD");
import DropDown from '../Elements/Html/Dropdown'
import { mapActions} from 'vuex'
import { UserService, AuthenticationError } from "../../services/user.service.js";

export default {
 
  data() {
    return {
      disabledDates: {
        from: new Date(oldY, oldM, oldD)
      },
      age: "",
      openDate: new Date(showY, oldM),
      isAuthSuccess: '',
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
  beforeCreate () {
      this.$store.commit('config/setLayout', 'default')
  },
  created() {
    this.$validator.extend('mature', {
      getMessage(field, val) {
          return "You should be 18 years of age"
      },
      validate(value, field) {
        return  moment(value).isBefore(moment().subtract(18, 'year') )
      }
    })
    // store.commit("setLayout", "user");
  },
  mounted() {
    // https://forum.vuejs.org/t/add-header-token-to-axios-requests-after-login-action-in-vuex/38834
    UserService.getRegisterData()
    .then((resp) => {
       this.whData = resp.data.whData;
    })
    .catch((err)=> {
      //TODO: Catch registration error
      console.log(err)
    })
  },
  methods: {
    ...mapActions(
      { register : 'auth/register' }
    ),
    moment: function() {
      return moment();
    },
    setValue: function(obj) {
      this.profileForm[obj.name] = obj.value;
    },
    handleRegister() {
      this.$validator.validateAll().then((result) => {
        if(result) {
          UserService.register(this.profileForm).then(res => {
            this.isAuthSuccess = res.data.message 
          })
          .catch(e => {
            var err = e.response.data.message
            let vm = this
            // Adding server side error to veevalidate error bag   
            Object.keys(err).forEach(function(item){
              vm.errors.add({
                field: item,
                msg: err[item][0]
              })
            })     
          })
        } else {
          // TODO: Catch validation error
        }
      })
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
