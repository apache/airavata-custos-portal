<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4">Tenant Request Details</h1>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="card border-default">
                    <div class="card-body">
                        <table class="table">
                            <tbody>
                            <tr>
                                <th scope="row">Request Id</th>
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
                                <th scope="row">Primary contact</th>
                                <td>{{tenantRequest.contacts[0]}}</td>
                            </tr>
                            <tr>
                                <th scope="row">Secondary contact</th>
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
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            tenantRequest: {
                type: Object
            }
        },
        components: {
            
        },
        data() {
            
        },
        beforeMount() {
           
        }
    }
</script>