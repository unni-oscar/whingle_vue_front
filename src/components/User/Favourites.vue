<template>
  <div id="favourites" class="col-md-10">
    <datatable :columns="columns" :sortKey="sortKey" :sortOrder="sortOrder" @sort="sortBy">
      <tbody>
        <tr v-for="favourite in favourites" :key="favourite.id">
          <td>
            <div class="row" style="border:1px solid #b8c7ce;margin-bottom:20px;">
              <div class="col-md-12" style="border:1px solid #b8c7ce;">
                <div class="col-md-8" style>
                  <b>{{favourite.profile_to.name}}</b> Last online: 4 hrs ago
                  <br />
                  Lives in {{favourite.profile_to.country.name}}, {{favourite.profile_to.state.name}}, {{favourite.profile_to.city.name}}
                </div>
                <div class="col-md-4" style="text-align:right">
                  <br />Created by: Parents
                </div>
              </div>

              <div class="col-md-12">
                <div class="col-md-3" style="font-size:10px;text-align:center">
                  <router-link
                    target="_blank"
                    :to="{name:'ProfileShow', params: { id: favourite.profile_to.secret_id }}"
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
          <td >
            <a  class="btn btn-app">
              <i class="fa fa-times"></i>Remove
            </a>
          </td>
          
        </tr>
        <tr></tr>
      </tbody>
    </datatable>
    <pagination
      :pagination="pagination"
      @prev="getFavourites(pagination.prevpageUrl)"
      @next="getFavourites(pagination.nextpageUrl)"
    ></pagination>
  </div>
</template>
<script>
import DataTable from "../Shared/DataTable";
import Pagination from "../Shared/Pagination";
import ApiService from "../../services/api.service";

export default {
  beforeCreate() {
    this.$store.commit("config/setHeading", "Favourites");
  },
  components: {
    datatable: DataTable,
    pagination: Pagination
  },
  data() {
    let sortOrder = {};
    let columns = [];
    columns.forEach(column => {
      sortOrder[column.name] = -1;
    });
    return {
      favourites: [],
      columns: columns,
      sortKey: "",
      sortOrder: sortOrder,
      perPage: ["10", "20", "30"],
      tableData: {
        draw: 0,
        length: 10,
        column: 0,
        dir: "desc"
      },
      pagination: {
        lastPage: "",
        currentPage: "",
        total: "",
        lastPageUrl: "",
        nextpageUrl: "",
        prevpageUrl: "",
        from: "",
        to: ""
      },
    };
  },
  created() {
    this.getFavourites();
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
      this.tableData.column = this.getIndex(this.columns, "name", key);
      this.tableData.dir = this.sortOrders[key] === 1 ? "asc" : "desc";
      this.getFavourites();
    },
    getFavourites(url = "/getFavourites") {
      this.tableData.draw++;
      ApiService.post(url, this.tableData)
        .then(r => {
          let favouritesReceived = r.data;
          if (this.tableData.draw == favouritesReceived.draw) {
            this.favourites = favouritesReceived.data.data;
            this.configPagination(
              favouritesReceived.data,
              "pagination"
            );
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
  }
};
</script>
