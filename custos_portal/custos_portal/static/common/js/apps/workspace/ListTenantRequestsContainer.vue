<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4 heading">Existing Tenants Request</h1>
            </div>
        </div>
        <div class="card">
            <div class="searchBoxDiv">
                <b-row>
                <b-col cols="4"><b-form-input v-model="searchID" class="searchBox"  placeholder="Enter ClientID"></b-form-input></b-col>
                <b-col>
                    <b-button variant="primary" @click="searchHandler" class="btnCustom"><span>
                        <i class="fas fa-search"></i>
                        </span>  Search</b-button>
                </b-col>
                </b-row>
            </div>
            <div v-if="this.searchInd === true" class="table" align="center">
                    <table class="table table-hover" id="myTable">
                        <thead class="table-head">
                            <tr>
                                <th width="40%">Client ID</th>
                                <th width="60%">Client Name</th>
                                <!-- <th width="20%">Status</th> -->
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tR in searchList" :key="tR.requestId">
                                    <td>
                                        <b-link class="link" @click="viewLink(tR)">{{tR.client_id}}</b-link>
                                    </td>
                                    <td>{{tR.client_name}}</td>
                                    <!-- <td>{{tR.tenant_status}}</td> -->
                                </tr>
                        </tbody>
                    </table>
                </div>
            <div class="h-tabs" v-if="this.searchInd === false">
                <div class="h-tab">
                    <div align="center" v-on:click="onClickHandler(1)" v-bind:class="[value===1 ? 'tab-content-active' : 'tab-content' ]">Requested</div>
                    <div align="center" v-on:click="onClickHandler(2)" v-bind:class="[value===2 ? 'tab-content-active' : 'tab-content' ]">Active</div>
                    <div align="center" v-on:click="onClickHandler(3)" v-bind:class="[value===3 ? 'tab-content-active' : 'tab-content' ]">Deactivated</div>
                </div>
                <div v-if="value === 1" class="content card-body">
                    <table class="table table-hover" >
                        <thead class="table-head">
                            <tr>
                                <th width="35%">Client ID</th>
                                <th width="45%">Client Name</th>
                                <th width="20%">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tR in requested_display" :key="tR.requestId">
                                <td>
                                    <b-link class="link" @click="viewLink(tR)">{{tR.client_id}}</b-link>
                                </td>
                                <td>{{tR.client_name}}</td>
                                <td>{{tR.tenant_status}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div align="center">
                        <button type="button" class="btnPagination" v-if="requested_page != 1" @click="paginateRequested(--requested_page)"> << </button>
                        <!-- <button 
                            type="button" 
                            class="btnPagination"
                            :key="requested_pageNumber" 
                            v-for="requested_pageNumber in requested_pages.slice(requested_page-1, requested_page+5)" 
                            :class="[requested_page == requested_pageNumber ? 'btnPaginationActive' : 'btnPagination']"
                            @click="paginateRequested(requested_pageNumber)"
                        > -->
                        <!-- {{requested_pageNumber}}
                        </button> -->
                        <button type="button" class="btnPagination" v-if="requested_page < requested_pages.length" @click="paginateRequested(++requested_page)"> >> </button>
                    </div>
                </div>
                <div v-if="value === 2" class="content card-body">
                    <table class="table table-hover">
                        <thead class="table-head">
                            <tr>
                                <th width="35%">Client ID</th>
                                <th width="45%">Client Name</th>
                                <th width="20%">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tR in active_display" :key="tR.requestId">
                                <td>
                                    <b-link class="link" @click="viewLink(tR)">{{tR.client_id}}</b-link>
                                </td>
                                <td>{{tR.client_name}}</td>
                                <td>{{tR.tenant_status}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div align="center">
                        <button type="button" v-if="active_page != 1" class="btnPagination" @click="paginateActive(--active_page)"> << </button>
                        <!-- <button 
                            type="button" 
                            class="btnPagination" 
                            :key="active_pageNumber" 
                            v-for="active_pageNumber in active_pages.slice(active_page-1, active_page+5)" 
                            :class="[active_page === active_pageNumber ? 'btnPaginationActive' : 'btnPagination']"
                            @click="paginateActive(active_pageNumber)"
                        >
                        {{active_pageNumber}}
                        </button> -->
                        <button type="button" v-if="active_page < active_pages.length" class="btnPagination" @click="paginateActive(++active_page)"> >> </button>
                    </div>
                </div>
                <div v-if="value === 3" class="content card-body">
                    <table class="table table-hover" >
                        <thead class="table-head">
                            <tr>
                                <th width="35%">Client ID</th>
                                <th width="45%">Client Name</th>
                                <th width="20%">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tR in deactivated_display" :key="tR.requestId">
                                <td>
                                    <b-link class="link" @click="viewLink(tR)" v-if="tR.client_id != ''">{{tR.client_id}}</b-link>
                                    <b-link class="link" @click="viewLink(tR)" v-if="tR.client_id === ''">N/A</b-link>
                                </td>
                                <td>{{tR.client_name}}</td>
                                <td>{{tR.tenant_status}}</td>
                            </tr>
                        </tbody>
                    </table>
                    <br/>
                    <div align="center">
                        <button type="button" class="btnPagination" @click="paginateDeactivated(--deactivated_page)" v-if="deactivated_page != 1"> << </button>
                        <!-- <button 
                            type="button" 
                            class="btnPagination" 
                            :key="deactivated_pageNumber" 
                            v-for="deactivated_pageNumber in deactivated_pages.slice(deactivated_page-1, deactivated_page+5)" 
                            :class="[deactivated_page === deactivated_pageNumber ? 'btnPaginationActive' : 'btnPagination']"
                            @click="paginateDeactivated(deactivated_pageNumber)"
                        > -->
                        <!-- {{deactivated_pageNumber}}
                        </button> -->
                        <button type="button" class="btnPagination" @click="paginateDeactivated(++deactivated_page)" v-if="deactivated_page < deactivated_pages.length"> >> </button>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>


    import {now} from "moment";
    import urls from "./utils/urls";
    import axios from 'axios';
    import {CLIENT_ID, CLIENT_SECRET} from '../config/config';
    import VueJwtDecode from 'vue-jwt-decode'

    export default {
        props: {
            tokenData: {
                type: String
            }
        },
        data() {
            return {
                requested: [],
                active: [],
                deactivated: [],
                value: 1,
                searchID: '',
                searchList: [],
                searchInd: false,
                perPage: 10,
                active_page: 1,
                active_pages: [],
                active_display: [],
                requested_page: 1,
                requested_pages: [],
                requested_display: [],
                deactivated_page: 1,
                deactivated_pages: [],
                deactivated_display: []
            }
        },
        computed: {
            rows() {
                return this.searchList.length;
            }
        },
        beforeMount() {
            let token = this.tokenData;
    
            let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);
            let decodedEmail = VueJwtDecode.decode(token).email;

            axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/tenants?offset=0&status=ACTIVE&requester_email=${decodedEmail}`, {
                headers: {
                    'Authorization': `Bearer ${encodedString}`
                }
            })
            .then(response => {
                const {tenant} = response.data;

                console.log(tenant);

                this.active = tenant.filter(t => {
                    if(t.tenant_status === 'ACTIVE')
                        return true;
                })

                this.requested = tenant.filter(t => {
                    if(t.tenant_status === 'REQUESTED')
                        return true;
                })

                this.deactivated = tenant.filter(t => {
                    if(t.tenant_status === 'DEACTIVATED')
                        return true;
                })
            })
            .then(response1 => {
                this.paginateRequested(1);
            })
            .then(response2 => {
                this.paginateActive(1);
            })
            .then(response3 => {
                this.paginateDeactivated(1);
            })
            
        },
        methods: {
            viewLink(tenantRequest) {
                console.log(tenantRequest);
                return urls.navigateToViewRequest(tenantRequest)
            },
            onClickHandler(step) 
            {
                this.value = step;
            },
            searchHandler() {
                this.searchInd = true;

                let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);
                let decodedEmail = VueJwtDecode.decode(this.tokenData).email;

                axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/tenants?offset=0&status=ACTIVE&requester_email=${decodedEmail}`, {
                headers: {
                    'Authorization': `Bearer ${encodedString}`
                }
                })
                .then(response => {
                    const {tenant} = response.data;
                    
                    this.searchList = tenant.filter(t => {
                        if(t.client_id === this.searchID)
                            return true;
                    });
                })
            },
            paginateActive(active_page) {
                this.active_page = active_page;
                let page = active_page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = page * perPage;
                this.active_display = this.active.slice(from, to);
            },
            paginateRequested(active_page) {
                this.requested_page = active_page;
                let page = active_page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = page * perPage;
                this.requested_display = this.requested.slice(from, to);
            },
            paginateDeactivated(active_page) {
                this.deactivated_page = active_page;
                let page = active_page;
                let perPage = this.perPage;
                let from = (page * perPage) - perPage;
                let to = page * perPage;
                this.deactivated_display = this.deactivated.slice(from, to);
            }
        },
        watch: {
            requested() {
                let numberOfPages = Math.ceil(this.requested.length/this.perPage);
                for(let i=1; i<=numberOfPages; i++)
                    this.requested_pages.push(i);
            },
            active() {
                let numberOfPages = Math.ceil(this.active.length/ this.perPage);
                this.active_pages = [];
                for(let i=1; i<=numberOfPages; i++)
                    this.active_pages.push(i);
            },
            deactivated() {
                let numberOfPages = Math.ceil(this.deactivated.length/this.perPage);
                for(let i=1; i<=numberOfPages; i++)
                    this.deactivated_pages.push(i);
            }
        }
    };
</script>

<style scoped>
.link {
    color: #ff6600;
}
.h-tab {
    display: flex;
    max-height: 500px;
    margin-top: 20px;
    padding: 20px;
}
.h-tabs {
    flex: 8;
}
.tab-content {
    flex: 1;
    border-bottom: 3px solid black;
    padding: 8px;
    color: black;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
}
.tab-content-active {
    flex: 1;
    border-bottom: 3px solid #ff6600;;
    padding: 8px;
    color: #ff6600;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
}
.table-head {
    background-color: lightgray;
}
.content {
    margin-top: 20px;
    width: 1100px;
    margin-left: 20px;
}
.heading {
    font-size: 30px;
    color: black;
    font-weight: bold;
}
.searchBoxDiv {
    margin-top: 20px;
    margin-left: 50px;
}
.searchBox {
    width: 350px;
    height: 45px;
}
.table {
    padding: 20px;
}
.btnCustom {
    color: white;
    background-color: #ff6600;
    padding: 10px 25px;
    border: 1px solid #ff6600;
    border-radius: 8px;
}
.btnCustom:hover {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
.btnCustom:focus {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
.btnPagination {
    color: #ff6600;
    background-color: white;
    padding: 10px 25px;
    border: 1px solid #ff6600;
    border-radius: 8px;
    font-weight: bold;
}
.btnPagination:hover {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
.btnPaginationActive {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
</style>