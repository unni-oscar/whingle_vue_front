<template>
  <section class="hero">
    <div class="hero-body">
      <div class="container">
        {{profileForm}}
        <form>
          <h1 class="title">Register</h1>
          <div class="columns is-vcentered">
            <div class="column is-5">
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" v-model="profileForm.name" placeholder="Name">
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
                  ></datepicker>
                  {{age}}
                  <!-- <vuejs-datepicker></vuejs-datepicker> -->
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <div class="control">
                  {{profileForm.gender}}
                  <label class="radio">
                    <input type="radio" name="profileForm.gender">
                    Male
                  </label>
                  <label class="radio">
                    <input type="radio" name="profileForm.gender">
                    Female
                  </label>
                </div>
              </div>
              
              <div class="field">
                <label class="label">Created by</label>
                <div class="control">
                  <div class="select">
                    <select v-model="profileForm.created_by">
                      <option>Select dropdown</option>
                      <option>With options</option>
                    </select>
                  </div>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input class="input" type="text" v-model="profileForm.email" placeholder="Email">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    v-model="profileForm.password"
                    placeholder="Password"
                  >
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <!-- <p class="help">This username is available</p> -->
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox">
                    I agree to the
                    <a href="#">terms and conditions</a>
                  </label>
                </div>
              </div>
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
  created() {
    store.commit("setLayout", "user");
  },
  mounted() {
    // TODO : Change this to common config fiel with header type redefined
    // https://forum.vuejs.org/t/add-header-token-to-axios-requests-after-login-action-in-vuex/38834
    axios
      .get(
        process.env.API_URL + "/auth/register",
        { name: this.name, email: this.email, password: this.password },
        { headers: { "X-Requested-With": "XMLHttpRequest" } }
      )
      .then(response => {
        this.whData = response.whData;
      });
  },
  methods: {
    moment: function() {
      return moment();
    },
    setValue: function(obj) {
      this.profileForm[obj.name] = obj.value;
    },
    // TODO: without headers also it works , so make sure to remove it if not necessary
    handleRegister() {
      store.commit("setLayout", "user");
      axios
        .post(
          process.env.API_URL + "/auth/register",
          { name: this.name, email: this.email, password: this.password },
          { headers: { "X-Requested-With": "XMLHttpRequest" } }
        )
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  },
  components: {
    Datepicker,
    dropdown: Dropdown,
    radiobutton: Radiobutton
  }
};
</script>
