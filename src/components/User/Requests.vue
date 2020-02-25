<template>
  <div id="interest" class="col-md-10">   
    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#request_received" data-toggle="tab">Request Received</a>
      </li>
      <li>
        <a href="#request_sent" data-toggle="tab">Request Sent</a>
      </li>
    </ul>

    <div class="tab-content">
      <!------------- Tab 1 -------------------------->
      <div class="tab-pane active" id="request_received">
        <div class="tableFilters">
          <div class="control">
            <div class="select">
              <select v-model="tableDataReceived.length" @change="getRequestsReceived()">
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
            <tr v-for="requestReceived in requestsReceived" :key="requestReceived.id">
              <td>
                <div class="row" style="border:1px solid #b8c7ce;margin-bottom:20px;">
                  <div class="col-md-12" style="border:1px solid #b8c7ce;">
                    <div class="col-md-8" style>
                      <b>{{requestReceived.profile_from.name}}</b> Last online: 4 hrs ago
                      <br />
                      Lives in {{requestReceived.profile_from.country.name}}, {{requestReceived.profile_from.state.name}}, {{interestReceived.profile_from.city.name}}
                    </div>
                    <div class="col-md-4" style="text-align:right">
                      <br />Created by: Parents
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="col-md-3" style="font-size:10px;text-align:center">
                      <router-link
                        target="_blank"
                        :to="{name:'ProfileShow', params: { id: requestReceived.profile_from.secret_id }}"
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
              <td v-if="requestReceived.status == 0">
                <a @click="resInterest(true, requestReceived.id)" class="btn btn-app">
                  <i class="fa fa-check"></i>Accept
                </a>
                <a @click="resInterest(false, requestReceived.id)" class="btn btn-app">
                  <i class="fa fa-times"></i>Reject
                </a>
                <!-- <button @click="resInterest(true, interestReceived.id)">Accept</button>
                <button @click="resInterest(false, interestReceived.id)">Reject</button>-->
              </td>
              <td v-else>
                <span v-if="requestReceived.type == 'P'" class="label label-success">Photo</span>
                <span v-if="requestReceived.type == 'C'" class="label label-danger">Contact</span>
                <span v-if="requestReceived.type == 'H'" class="label label-default">Horoscope</span>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </datatable>
        <pagination
          :pagination="paginationReceived"
          @prev="getRequestsReceived(paginationReceived.prevpageUrl)"
          @next="getrequestsReceived(paginationReceived.nextpageUrl)"
        ></pagination>
      </div>
      <!------------- End Tab 1 -------------------------->
      <!------------- Tab 2 -------------------------->
      <div class="tab-pane" id="request_sent">
        <div class="tableFilters">
          <div class="control">
            <div class="select">
              <select v-model="tableDataSent.length" @change="getRequestsSent()">
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
            <tr v-for="requestSent in requestsSent" :key="requestSent.id">
              <td>
                <div class="row" style="border:1px solid #b8c7ce;margin-bottom:20px;">
                  <div class="col-md-12" style="border:1px solid #b8c7ce;">
                    <div class="col-md-8" style>
                      <b>{{requestSent.profile_to.name}}</b> Last online: 4 hrs ago
                      <br />
                      Lives in {{requestSent.profile_to.country.name}}, {{requestSent.profile_to.state.name}}, {{requestSent.profile_to.city.name}}
                    </div>
                    <div class="col-md-4" style="text-align:right">
                      <br />Created by: Parents
                    </div>
                  </div>

                  <div class="col-md-12">
                    <div class="col-md-3" style="font-size:10px;text-align:center">
                      <router-link
                        target="_blank"
                        :to="{name:'ProfileShow', params: { id: requestSent.profile_to.secret_id }}"
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
                <span v-if="requestSent.type == 'P'" class="label label-success">Photo</span>
                <span v-if="requestSent.type == 'C'" class="label label-danger">Contact</span>
                <span v-if="requestSent.type == 'H'" class="label label-default">Horoscope</span>
              </td>
            </tr>
            <tr></tr>
          </tbody>
        </datatable>
        <pagination
          :pagination="paginationSent"
          @prev="getRequestsSent(paginationSent.prevpageUrl)"
          @next="getRequestsSent(paginationSent.nextpageUrl)"
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

export default {
  beforeCreate() {
    this.$store.commit("config/setHeading", "Requests");
  },
  components: {
    datatable: DataTable,
    pagination: Pagination,
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
      requestsReceived: [],
      requestsSent: [],
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
    this.getRequestsReceived();
    this.getRequestsSent();
  },
  methods: {
    
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
      this.tableData.column = this.getIndex(this.columns, "name", key);
      this.tableData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
    //   this.getInterests();
    },
    getRequestsReceived(url = "/getRequestsReceived") {
      this.tableDataReceived.draw++;
      ApiService.post(url, this.tableDataReceived)
        .then(r => {
          let requestsDataReceived = r.data;
          if (this.tableDataReceived.draw == requestsDataReceived.draw) {
            this.requestsReceived = requestsDataReceived.data.data;
            this.configPagination(
              requestsDataReceived.data,
              "paginationReceived"
            );
          }
        })
        .catch(e => {
          console.log(e);
        });
    },
    getRequestsSent(url = "/getRequestsSent") {
      this.tableDataSent.draw++;
      ApiService.post(url, this.tableDataSent)
        .then(r => {
          let requestsDataSent = r.data;
          if (this.tableDataSent.draw == requestsDataSent.draw) {
            this.requestsSent = requestsDataSent.data.data;
            this.configPagination(requestsDataSent.data, "paginationSent");
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
    }
  }
};
</script>
