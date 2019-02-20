<template>
  <div class="box-footer">
    <div class="box-body">
      <form role="form" @submit.prevent="validateBeforeSubmit" autocomplete="off">
        <div class="row">
          <div class="form-group">
            <label for="exampleInputEmail1">Age</label>
          </div>
          <div class="col-md-2">from
            <dropdown
              cl="col-md-6 form-control"
              :options="whData.age"
              name="ageFrom"
              v-model="searchForm.ageFrom"
              validation="required"
            ></dropdown>
          </div>
          <div class="col-md-2">to
            <dropdown
              cl="col-md-6 form-control"
              :options="whData.age"
              name="ageTo"
              v-model="searchForm.ageTo"
              validation="required"
            ></dropdown>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="form-group"></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <div class="form-group">
              <button type="submit" class="btn btn-primary" value="Submit">Search</button>
            </div>
          </div>
        </div>
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
      </form>
      <div class="col-md-6">
        <div
          class="row"
          v-for="record in searchList"
          style="border:1px solid #b8c7ce;margin-bottom:20px;"
        >
          <div class="col-md-12" style="border:1px solid #b8c7ce;">
            <div class="col-md-8" style>
              <b>{{record.name}}</b> Last online: 4 hrs ago
              <br>
              Lives in {{record.profile.country.name}}, {{record.profile.state.name}}, {{record.profile.city.name}}
            </div>
            <div class="col-md-4" style="text-align:right">x
              <br>Created by: Parents
            </div>
          </div>
          <div class="col-md-12">
            <div class="col-md-3" style="font-size:10px;text-align:center">
              <router-link target="_blank"
                :to="{name:'ProfileShow', params: { id: record.profile.secret_id }}"
              >View profile</router-link>

              <br>
              <img src="http://lorempixel.com/100/100/people" alt>
              <br>1 of 4
            </div>
            <div class="col-md-9">19 Yrs / Single
              <br>Education: MSc Computer Science
              <br>Occupation: IT Manager
              <br>Religion/Caste: Hindu / Ezhava
              <br>Annual Income: 12,000,00
              <br>
            </div>
          </div>
          <div
            class="col-md-12"
            style="font-size:10px;text-align:right;border:1px solid #b8c7ce;"
          >Send Message | Express Interest | Add to favourites | Request Contacts | Request Horoscope | Print | Report</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../Elements/Html/Dropdown";
import ApiService from "../../services/api.service.js";
let vm = this;
export default {
  data() {
    return {
      whData: {},
      message: "",
      searchList: {},
      searchForm: {
        ageTo: "",
        ageFrom: ""
      }
    };
  },
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.message = "";
          ApiService.post("/search", this.searchForm)
            .then(r => {
              console.log(r.data.length);
              if (0 == r.data.length) {
                this.activeClass = "callout-danger";
                this.message = this.$t("no_records");
              }
              this.searchList = r.data;
            })
            .then(() => {
              this.$validator.reset();
            })
            .catch(e => {
              this.activeClass = "callout-danger";
              this.message = this.$t("no_records");
            });
        } else {
          console.log("Form has error");
        }
      });
    }
  },
  components: {
    dropdown: Dropdown
  },

  beforeCreate() {
    this.$store.commit("config/setHeading", "Search");
  },
  created() {
    ApiService.get("/search")
      .then(response => response.data)
      .then(response => {
        this.whData = response.whData;
      })
      .catch(e => {});
  }
};
</script>
