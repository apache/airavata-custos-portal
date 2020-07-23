<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4">Existing Tenants Request</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                            <b-tabs card>
                                <b-tab class="w-75" title="Requested">
                                    <table class="table table-hover">
                                        <thead>
                                        <tr>
                                            <th>Request Id</th>
                                            <th>Client Name</th>
                                            <th>Creation Time</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr
                                                v-for="tR in requested"
                                                :key="tR.requestId"
                                        >
                                            <td>
                                                <b-link @click="viewLink(tR)">{{tR.tenant_id}}</b-link>
                                            </td>
                                            <td>{{tR.client_name}}</td>
                                            <td>
                                                <span>{{ tR.creationTime }}</span>
                                            </td>
                                            <td>
                                                {{tR.tenant_status}}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </b-tab>
                                <b-tab class="w-75" title="Active">
                                    <table class="table table-hover">
                            
                                        <thead>
                                        <tr>
                                            <th>Request Id</th>
                                            <th>Client Name</th>
                                            <th>Creation Time</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr
                                                v-for="tR in active"
                                                :key="tR.requestId"
                                        >
                                            <td>
                                                <b-link @click="viewLink(tR)">{{tR.tenant_id}}</b-link>
                                            </td>
                                            <td>{{tR.client_name}}</td>
                                            <td>
                                                <span>{{ tR.creationTime }}</span>
                                            </td>
                                            <td>
                                                {{tR.tenant_status}}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </b-tab>
                                <b-tab class="w-75" title="Deactivated">
                                    <table class="table table-hover">
                            
                                        <thead>
                                        <tr>
                                            <th>Request Id</th>
                                            <th>Client Name</th>
                                            <th>Creation Time</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr
                                                v-for="tR in deactivated"
                                                :key="tR.requestId"
                                        >
                                            <td>
                                                <b-link @click="viewLink(tR)">{{tR.tenant_id}}</b-link>
                                            </td>
                                            <td>{{tR.client_name}}</td>
                                            <td>
                                                <span>{{ tR.creationTime }}</span>
                                            </td>
                                            <td>
                                                {{tR.tenant_status}}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </b-tab>
                        </b-tabs>
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
                deactivated: []
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
        },
        methods: {
            viewLink(tenantRequest) {
                return urls.navigateToViewRequest(tenantRequest)
            }
        }
    };
</script>

<style>
</style>
