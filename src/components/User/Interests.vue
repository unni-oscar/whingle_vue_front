<template>
  <div id="interest" class="col-md-10">
    <modalConfirm
      :question="question"
      :id="id"
      :action="action"
      @modalAction="actionInterests($event)"
    ></modalConfirm>
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#1" data-toggle="tab">Interest Received</a>
      </li>
      <li>
        <a href="#2" data-toggle="tab">Interest Sent</a>
      </li>
    </ul>

    <div class="tab-content">
      <!------------- Tab 1 -------------------------->
      <div class="tab-pane active" id="1">
        <div class="tableFilters">
          <div class="control">
            <div class="select">
              <select v-model="tableDataReceived.length" @change="getInterestsReceived()">
                <option
                  v-for="(records, index) in perPage"
                  :key="index"
                  :value="records"
                >{{records}}</option>
              </select>
            </div>
          </div>
        </div>

        <datatable :columns="columns" :sortKey="sortKey" :sortOrder="sortOrder" @sort="sortBy">
          <tbody>
            <tr v-for="interestReceived in interestsReceived" :key="interestReceived.id">
              <td>
                <div class="row" style="border:1px solid #b8c7ce;margin-bottom:20px;">
                  <div class="col-md-12" style="border:1px solid #b8c7ce;">
                    <div class="col-md-8" style>
                      <b>{{interestReceived.profile_from.name}}</b> Last online: 4 hrs ago
                      <br />
                      Lives in {{interestReceived.profile_from.country.name}}, {{interestReceived.profile_from.state.name}}, {{interestReceived.profile_from.city.name}}
                    </div>
                    <div class="col-md-4" style="text-align:right">
                      <br />Created by: Parents
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="col-md-3" style="font-size:10px;text-align:center">
                      <router-link
                        target="_blank"
                        :to="{name:'ProfileShow', params: { id: interestReceived.profile_from.secret_id }}"
                      >View profile</router-link>

                      <br />
                      <img src="http://lorempixel.com/100/100/people" alt />
                      <br />1 of 4
                    </div>
                    <div class="col-md-9">
                      19 Yrs / Single
                      <br />Education: MSc Computer Science
                      <br />Occupation: IT Manager
                      <br />Religion/Caste: Hindu / Ezhava
                      <br />Annual Income: 12,000,00
                      <br />
                    </div>
                  </div>
                </div>
              </td>
              <td v-if="interestReceived.status == 0">
                <a @click="resInterest(true, interestReceived.id)" class="btn btn-app">
                  <i class="fa fa-check"></i>Accept
                </a>
                <a @click="resInterest(false, interestReceived.id)" class="btn btn-app">
                  <i class="fa fa-times"></i>Reject
                </a>
                <!-- <button @click="resInterest(true, interestReceived.id)">Accept</button>
                <button @click="resInterest(false, interestReceived.id)">Reject</button>-->
              </td>
              <td v-else>
                <span v-if="interestReceived.status == 1" class="label label-success">Accepted</span>
                <span v-if="interestReceived.status == 2" class="label label-danger">Rejected</span>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </datatable>
        <pagination
          :pagination="paginationReceived"
          @prev="getInterestsReceived(paginationReceived.prevpageUrl)"
          @next="getInterestsReceived(paginationReceived.nextpageUrl)"
        ></pagination>
      </div>
      <!------------- End Tab 1 -------------------------->
      <!------------- Tab 2 -------------------------->
      <div class="tab-pane" id="2">
        <div class="tableFilters">
          <div class="control">
            <div class="select">
              <select v-model="tableDataSent.length" @change="getInterestsSent()">
                <option
                  v-for="(records, index) in perPage"
                  :key="index"
                  :value="records"
                >{{records}}</option>
              </select>
            </div>
          </div>
        </div>

        <datatable :columns="columns" :sortKey="sortKey" :sortOrder="sortOrder" @sort="sortBy">
          <tbody>
            <tr v-for="interestSent in interestsSent" :key="interestSent.id">
              <td>
                <div class="row" style="border:1px solid #b8c7ce;margin-bottom:20px;">
                  <div class="col-md-12" style="border:1px solid #b8c7ce;">
                    <div class="col-md-8" style>
                      <b>{{interestSent.profile_to.name}}</b> Last online: 4 hrs ago
                      <br />
                      Lives in {{interestSent.profile_to.country.name}}, {{interestSent.profile_to.state.name}}, {{interestSent.profile_to.city.name}}
                    </div>
                    <div class="col-md-4" style="text-align:right">
                      <br />Created by: Parents
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="col-md-3" style="font-size:10px;text-align:center">
                      <router-link
                        target="_blank"
                        :to="{name:'ProfileShow', params: { id: interestSent.profile_to.secret_id }}"
                      >View profile</router-link>

                      <br />
                      <img src="http://lorempixel.com/100/100/people" alt />
                      <br />1 of 4
                    </div>
                    <div class="col-md-9">
                      19 Yrs / Single
                      <br />Education: MSc Computer Science
                      <br />Occupation: IT Manager
                      <br />Religion/Caste: Hindu / Ezhava
                      <br />Annual Income: 12,000,00
                      <br />
                    </div>
                  </div>
                </div>
              </td>

              <td>
                <span v-if="interestSent.status == 0" class="label label-default">Response waiting</span>
                <span v-if="interestSent.status == 1" class="label label-success">Accepted</span>
                <span v-if="interestSent.status == 2" class="label label-danger">Rejected</span>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </datatable>
        <pagination
          :pagination="paginationSent"
          @prev="getInterestsSent(paginationSent.prevpageUrl)"
          @next="getInterestsSent(paginationSent.nextpageUrl)"
        ></pagination>
      </div>
      <!------------- End Tab 2 -------------------------->
    </div>
  </div>
</template>
<script>
import DataTable from "../Shared/DataTable";
import Pagination from "../Shared/Pagination";
import ApiService from "../../services/api.service";
import ModalConfirm from "../Shared/ModalConfirm";

export default {
  beforeCreate() {
    this.$store.commit("config/setHeading", "Interests");
  },
  components: {
    datatable: DataTable,
    pagination: Pagination,
    ModalConfirm: ModalConfirm
  },
  data() {
    let sortOrder = {};
    let columns = [];
    columns.forEach(column => {
      sortOrder[column.name] = -1;
    });
    return {
      question: "",
      action: "",
      id: 0,
      interestsReceived: [],
      interestsSent: [],
      columns: columns,
      sortKey: "deadline",
      sortOrder: sortOrder,
      perPage: ["10", "20", "30"],
      tableDataReceived: {
        draw: 0,
        length: 10,
        column: 0,
        dir: "desc"
      },
      tableDataSent: {
        draw: 0,
        length: 10,
        column: 0,
        dir: "desc"
      },
      paginationReceived: {
        lastPage: "",
        currentPage: "",
        total: "",
        lastPageUrl: "",
        nextpageUrl: "",
        prevpageUrl: "",
        from: "",
        to: ""
      },
      paginationSent: {
        lastPage: "unni",
        currentPage: "",
        total: "",
        lastPageUrl: "",
        nextpageUrl: "",
        prevpageUrl: "",
        from: "",
        to: ""
      }
    };
  },
  created() {
    this.getInterestsReceived();
    this.getInterestsSent();
  },
  methods: {
    actionInterests(res) {
      if (true == res.userAction) {
        ApiService.post("replyInterest", {
          id: res.pid,
          action: res.action
        })
          .then(r => {
            this.getInterestsReceived(
              "/getInterestsReceived?page=" +
                this.paginationReceived.currentPage
            );
          })
          .catch(e => {
            console.log(e);
          });
      }
    },
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
      this.tableData.column = this.getIndex(this.columns, "name", key);
      this.tableData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
      this.getInterests();
    },
    getInterestsReceived(url = "/getInterestsReceived") {
      this.tableDataReceived.draw++;
      ApiService.post(url, this.tableDataReceived)
        .then(r => {
          let interestsDataReceived = r.data;
          if (this.tableDataReceived.draw == interestsDataReceived.draw) {
            this.interestsReceived = interestsDataReceived.data.data;
            this.configPagination(
              interestsDataReceived.data,
              "paginationReceived"
            );
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    getInterestsSent(url = "/getInterestsSent") {
      this.tableDataSent.draw++;
      ApiService.post(url, this.tableDataSent)
        .then(r => {
          let interestsDataSent = r.data;
          if (this.tableDataSent.draw == interestsDataSent.draw) {
            this.interestsSent = interestsDataSent.data.data;
            this.configPagination(interestsDataSent.data, "paginationSent");
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    configPagination(data, type) {
      this[type].lastPage = data.last_page;
      this[type].currentPage = data.current_page;
      this[type].total = data.total;
      this[type].lastPageUrl = data.last_page_url;
      this[type].nextpageUrl = data.next_page_url;
      this[type].prevpageUrl = data.prev_page_url;
      this[type].from = data.from;
      this[type].to = data.to;
    },
    resInterest(action, id) {
      let confirmQuestion = action
        ? "reply_interest_accept"
        : "reply_interest_reject";
      this.$modal.show("m-confirm", {
        question: this.$t(confirmQuestion),
        id: id,
        action: action
      });
    }
  }
};
</script>
