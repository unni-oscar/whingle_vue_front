<template>
  <div class="box-footer">
     <div class="box-body">
    <form role="form" @submit.prevent="validateBeforeSubmit" autocomplete="off">
      <div class="row">
        <div class="col-md-7">
          <div
            v-if="message"
            v-bind:class="[activeClass]"
            class="callout"
            style="margin-bottom: 0!important;"
          >{{message}}</div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label>Name</label>
            <input
              class="form-control"
              type="text"
              name="name"
              data-vv-delay="100"
              v-validate="'required|alpha_spaces|max:40'"
              v-model="profileForm.name"
              placeholder="Name"
            >
            <span class="help-block text-red">{{ errors.first('name') }}</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Gender</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.gender"
                name="gender"
                class
                :rLabel="channel.name"
                :key="channel.id"
                v-model="profileForm.gender"
                :rIndex="channel.id"
                v-validate="'required|included:1,2'"
                @change="setValue"
              ></radiobutton>
              <span
                class="help-block text-red"
                v-show="errors.has('gender')"
              >{{ errors.first('gender') }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
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
            <span
              class="help-block text-red"
              v-show="errors.has('dob')"
            >{{ errors.first('dob') }}</span>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
              <label for="exampleInputEmail1">Profile Created by</label>
              <dropdown
                cl="col-md-6 form-control"
                :options="whData.created_by"
                name="created_by"
                v-model="profileForm.created_by"
                validation="required|min_value:1|max_value:6"
              ></dropdown>
            </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Mother Tongue</label>
            <dropdown
              cl="form-control"
              :options="motherTongues"
              name="mother_tongue"
              v-model="profileForm.mother_tongue_id"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Religion</label>
            <dropdown
              cl="form-control"
              :options="religions"
              name="religion_id"
              v-model="selectedReligion"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Caste</label>
            <dropdown
              cl="form-control"
              :options="castes"
              name="caste_id"
              v-model="profileForm.caste_id"
            ></dropdown>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Star</label>
            <dropdown
              cl="col-md-6 form-control"
              :options="whData.star"
              name="star"
              v-model="profileForm.star"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Moon sign</label>
            <dropdown
              cl="col-md-6 form-control"
              :options="whData.moon_sign"
              name="moon_sign"
              v-model="profileForm.moon_sign"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Manglik</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.manglik"
                name="manglik"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.manglik"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Horoscope match required</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.horoscope"
                name="horoscope"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.horoscope"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Education</label>
            <dropdown
              cl="form-control"
              :options="whData.education_category"
              name="education"
              v-model="profileForm.education"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Working in</label>
            <dropdown
              cl="form-control"
              :options="whData.job_category"
              name="job"
              v-model="profileForm.job"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Income</label>
            <div class="control">
              <dropdown
                cl="form-control"
                :options="whData.income"
                name="income"
                v-model="profileForm.income"
              ></dropdown>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Country Living</label>
            <dropdown
              cl="form-control"
              :options="countries"
              name="country_id"
              v-model="selectedCountry"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">State Living</label>
            <dropdown
              cl="col-md-10 form-control"
              :options="states"
              name="state_id"
              v-model="selectedState"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">City Living</label>
            <dropdown
              cl="col-md-10 form-control"
              :options="cities"
              name="city_id"
              v-model="profileForm.city_id"
            ></dropdown>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Height</label>
            <dropdown
              cl="col-md-6 form-control"
              :options="whData.height"
              name="height"
              v-model="profileForm.height"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Weight</label>
            <dropdown
              cl="col-md-6 form-control"
              :options="whData.weight"
              name="weight"
              v-model="profileForm.weight"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Build</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.build"
                name="build"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.build"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
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
              <span
                class="help-block text-red"
                v-show="errors.has('marital_status')"
              >{{ errors.first('marital_status') }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Has Children</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.yesNo"
                name="has_children"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.has_children"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Staying with</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.yesNo"
                name="staying_with"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.staying_with"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Complexion</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.complexion"
                name="complexion"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.complexion"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Blood Group</label>
            <div class="control">
              <dropdown
                cl="col-md-6 form-control"
                :options="whData.blood_group"
                name="blood_group"
                v-model="profileForm.blood_group"
              ></dropdown>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Disability</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.yesNo"
                name="disability"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.disability"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Diet</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.diet"
                name="diet"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.diet"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Smoke</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.smoke"
                name="smoke"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.smoke"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="exampleInputEmail1">Drink</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.drink"
                name="drink"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.drink"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Father</label>
            <dropdown
              cl="form-control"
              :options="whData.father"
              name="father"
              v-model="profileForm.father"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Mother</label>
            <dropdown
              cl="form-control"
              :options="whData.mother"
              name="mother"
              v-model="profileForm.mother"
            ></dropdown>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Brothers</label>
            <dropdown
              cl="form-control"
              :options="whData.bro_sis"
              name="brothers"
              v-model="profileForm.brothers"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Brothers Married</label>
            <dropdown
              cl="form-control"
              :options="whData.bro_sis"
              name="brothers_married"
              v-model="profileForm.brothers_married"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Sisters</label>
            <dropdown
              cl="form-control"
              :options="whData.bro_sis"
              name="sisters"
              v-model="profileForm.sisters"
            ></dropdown>
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="exampleInputEmail1">Sisters Married</label>
            <dropdown
              cl="form-control"
              :options="whData.bro_sis"
              name="sisters_married"
              v-model="profileForm.sisters_married"
            ></dropdown>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Family Status</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.family_status"
                name="family_status"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.family_status"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Family type</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.family_type"
                name="family_type"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.family_type"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Family values</label>
            <div class="control">
              <radiobutton
                v-for="channel in whData.family_values"
                name="family_values"
                :rLabel="channel.name"
                :key="channel.id"
                :rIndex="channel.id"
                :value="profileForm.family_values"
                @change="setValue"
              ></radiobutton>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
            <div class="form-group">
            <label for="exampleInputEmail1">Description</label>
            <textarea name="about" rows="4" cols="60" v-model="profileForm.about"></textarea>
          </div>       
         
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
           <div class="form-group">
            <label for="exampleInputEmail1">Contact number</label>
            <input
              type="text"
              name="contact_number"
              class="form-control"
              v-model="profileForm.contact_number"
            >
          </div>

        </div>
        <div class="col-md-4">

          <div class="form-group">
            <label for="exampleInputEmail1">Address</label>
            <input type="text" name="address" class="form-control" v-model="profileForm.address">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2">
          <div class="form-group">
              <button type="submit" class="btn btn-primary" value="Submit">Submit</button>
            </div>
        </div>
      </div>



    </form>
    </div>
  </div>
</template>
<script>
import UserService from "../../services/user.service.js";
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
import Dropdown from "../Elements/Html/Dropdown";
import Radiobutton from "../Elements/Html/RadioButton";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
import profileFields from "../../lib/profileFields.js";
import ApiService from "../../services/api.service.js";
export default {
  data() {
    return {
      motherTongues: {},
      res: {},
      activeClass: "",
      message: "",
      countries: {},
      selectedCountry: {},
      states: {},
      selectedState: {},
      cities: {},
      selectedCity: {},
      selectedReligion: {},
      castes: {},
      educations: {},
      religions: {},
      disabledDates: {
        from: new Date(oldY, oldM, oldD)
      },
      age: "",
      openDate: new Date(showY, oldM),
      profileFields: profileFields,
      whData: {},
      profileForm: {}
    };
  },
  computed: {
    "profileForm.dob": function(obj) {
      console.log("ssss");
      this.age = moment().diff(moment(obj, "DD/MM/YYYY"), "years") + " Yrs";
    }
  },
  watch: {
    "profileForm.dob": function(obj) {
      console.log("ssss");
      this.age = moment().diff(moment(obj, "DD/MM/YYYY"), "years") + " Yrs";
    },
    selectedCountry: function() {
      this.getStates();
      this.profileForm.country_id = this.selectedCountry;
      this.selectedState = this.res.state_id || "";
      this.cities = {};
    },
    selectedState: function() {
      this.getCities();
      this.profileForm.city_id = this.res.city_id || "";
      this.profileForm.state_id = this.selectedState;
    },
    selectedReligion: function() {
      this.getCastes();
      this.profileForm.religion_id = this.selectedReligion;
      this.profileForm.caste_id = this.res.caste_id || "";
    }
  },
  beforeCreate() {
    this.$store.commit("config/setHeading", "Profile");
  },
  created() {
    this.$validator.extend("mature", {
      getMessage(field, val) {
        return "You should be 18 years of age";
      },
      validate(value, field) {
        return moment(value).isBefore(moment().subtract(18, "year"));
      }
    });
    this.profileFields.forEach(element => {
      this.profileForm[element.name] = "";
    });
  },
  mounted() {
    UserService.myProfile()
      .then(response => response.data)
      .then(response => {
        this.res = response.profile;
        this.whData = response.whData;
        this.countries = response.countries;
        this.selectedCountry = this.res.country_id || "";
        this.selectedState = this.res.state_id || "";
        this.selectedCity = this.res.city_id || "";
        this.selectedReligion = this.res.religion_id || "";
        this.religions = response.religions;
        this.jobs = response.jobs;
        this.motherTongues = response.motherTongues;
        this.profileFields.forEach(element => {
          this.profileForm[element.name] = response.profile[element.name];
        });
      })
      .catch(e => {});
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          console.log("validation success");
        
          ApiService.post("/profile", this.profileForm)
            .then(r => {
              this.states = r.data;
                this.activeClass = "callout-success";
              this.message = r.data.message
               window.scrollTo(0,0);              
            })
            .then(()=> {
              this.$validator.reset();
            })
            .catch(e => {
               this.activeClass = "callout-danger";
              this.message = "Please fix the errors from";
              var err = e.response.data.message;
              let vm = this;
              // Adding server side error to veevalidate error bag
              Object.keys(err).forEach(function(item) {
                vm.errors.add({
                  field: item,
                  msg: err[item][0]
                });
              });

              // console.log(e.response);
               window.scrollTo(0,0);
            });
        } else {
          this.activeClass = "callout-danger";
          this.message = "Please fix the errors";
          //if validation error
          console.log("validation error");
          window.scrollTo(0,0);
        }
      });
    },
    setValue: function(obj) {
      this.profileForm[obj.name] = obj.value;
    },
    getStates() {
      if (this.selectedCountry > 0) {
        ApiService.get("/states/" + this.selectedCountry)
          .then(r => {
            this.states = r.data;
          })
          .catch(e => {
            console.log(e.response);
          });
      }
    },
    getCities() {
      if (this.selectedState > 0) {
        ApiService.get("/cities/" + this.selectedState)
          .then(r => {
            this.cities = r.data;
          })
          .catch(e => {
            console.log(e.response);
          });
      }
    },
    getCastes() {
      if (this.selectedReligion > 0) {
        ApiService.get("/castes/" + this.selectedReligion)
          .then(r => {
            console.log(r);
            this.castes = r.data;
          })
          .catch(e => {
            console.log(e.response);
          });
      }
    }
  },
  components: {
    dropdown: Dropdown,
    radiobutton: Radiobutton,
    Datepicker
  }
};
</script>
<style scoped>
.error-container {
  height: 25px;
}
</style>
