<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4 heading">Tenant Request Details</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card border-default">
                    <div class="card-body">
                        <table class="table">
                            <tbody>
                            <tr>
                                <th scope="row">Request ID</th>
                                <td>
                                    <div> {{tenantRequest.tenant_id}}</div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Client Name</th>
                                <td>
                                    <div> {{tenantRequest.client_name}}</div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Requester Email</th>
                                <td>{{tenantRequest.requester_email}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Admin Username</th>
                                <td>{{tenantRequest.admin_username}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Admin Name</th>
                                <td>{{tenantRequest.admin_first_name}} {{ " " }} {{tenantRequest.admin_last_name}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Primary Contact</th>
                                <td>{{tenantRequest.contacts[0]}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Secondary Contact</th>
                                <td>{{tenantRequest.contacts[1]}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Redirect URI Name</th>
                                <td>
                                    <table>
                                        <tr v-for="uri in tenantRequest.redirect_uris" :key="uri">
                                            {{uri}}
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Scope</th>
                                <td>{{tenantRequest.scope}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Domain</th>
                                <td>{{tenantRequest.domain}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Client URI</th>
                                <td>{{tenantRequest.client_uri}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Comment</th>
                                <td>{{tenantRequest.comment}}</td>
                            </tr>
                            <br/>
                            <div class="row">
                                <div
                                        id="col-exp-buttons"
                                        class="col"
                                >
                                    <b-button
                                            v-b-modal.modal-1
                                            variant="success"
                                            @click="approveHandler"
                                    >
                                        <div>
                                            <b-modal id="modal-1" title="Info">
                                                <p class="my-4">Tenant is approved and credentials are activated</p>
                                            </b-modal>
                                        </div>
                                        Approve
                                    </b-button>
                                    <b-button
                                            @click="editExperiment"
                                            variant="primary"
                                            v-if="tenantRequest.client_id != 'custos-6nwoqodstpe5mvcq09lh-10000101'"
                                    >
                                        Edit
                                    </b-button>
                                    <b-button
                                            v-b-modal.modal-2
                                            variant="danger"
                                            @click="rejectTenant"
                                    >
                                        Reject
                                        <div>
                                            <b-modal id="modal-2" title="Info">
                                                <p class="my-4">Tenant is rejected</p>
                                            </b-modal>
                                        </div>
                                    </b-button>
                                </div>
                            </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import urls from "./utils/urls";
    import axios from 'axios';

    export default {
        props: {
            tenantRequest: {
                type: Object
            },
            tokenData: {
                type: String
            }
        },
        methods: {
            editExperiment(tenantRequest) {
                return urls.navigateToAdminEditRequest(this.tenantRequest)
            },
            approveHandler() {
                let token = this.tokenData;

                axios.post('https://custos.scigap.org/apiserver/tenant-management/v1.0.0/status', {
                    "client_id":this.tenantRequest.client_id,
                    "status": "ACTIVE"
                },
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    if(response.status === 200)
                        window.location.href = "http://127.0.0.1:8000/admin/list-requests"
                })
            },
            rejectTenant() {
                let token = this.tokenData;

                axios.post('https://custos.scigap.org/apiserver/tenant-management/v1.0.0/status', {
                    "client_id":this.tenantRequest.client_id,
                    "status": "DEACTIVATED"
                },
                {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then(response => {
                    if(response.status === 200)
                        window.location.href = "http://127.0.0.1:8000/admin/list-requests"
                })
            }
        },
    }
</script>

<style scoped>
.heading {
    font-size: 30px;
    color: black;
    font-weight: bold;
}
</style>