<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4">New Tenant Request Form</h1>
            </div>
        </div>
        <div>
            <b-form @submit="onSubmit" >
                <b-card no-body>
                    <b-tabs card  v-model="tabIndex">
                        <b-tab :title-link-class="linkClass(0)" class="w-75" title="User Info">
                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Requester Email"
                                    label-for="requester-email"
                            >
                                <b-form-input
                                        :state="!$v.form.requester_email.$invalid"
                                        id="requester-email"
                                        name="requester-email"
                                        trim
                                        type="email"
                                        v-model="form.requester_email">
                                </b-form-input>
                            </b-form-group>
                            <b-form-row>
                                <b-col>
                                    <b-form-group
                                            :invalid-feedback="invalidFeedback"
                                            :valid-feedback="validFeedback"
                                            description=""
                                            id="fieldset-1"
                                            label="Primary contact"
                                            label-for="primary-contact"
                                            description="Contact of either the requester or the admin of the gateway"
                                    >
                                        <b-form-input
                                                :state="!$v.form.primary_contact.$invalid"
                                                id="primary-contact"
                                                name="primary-contact"
                                                trim
                                                type="tel"
                                                v-model="form.primary_contact">
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group
                                            :invalid-feedback="invalidFeedback"
                                            :valid-feedback="validFeedback"
                                            description=""
                                            id="fieldset-1"
                                            label="Secondary Contact"
                                            label-for="secondary-contact"
                                    >
                                        <b-form-input
                                                :state="!$v.form.secondary_contact.$invalid"
                                                id="secondary-contact"
                                                name="secondary-contact"
                                                trim
                                                v-model="form.secondary_contact">
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-form-row>
                        </b-tab>

                        <b-tab :title-link-class="linkClass(1)" class="w-75" title="Gateway Admin Details">
                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Admin Username"
                                    label-for="admin-username"
                            >
                                <b-form-input
                                        :state="!$v.form.admin_username.$invalid"
                                        id="admin-username"
                                        name="admin-username"
                                        trim
                                        v-model="form.admin_username">
                                </b-form-input>
                            </b-form-group>
                            <b-form-row>
                                <b-col>
                                    <b-form-group
                                            :invalid-feedback="invalidFeedback"
                                            :valid-feedback="validFeedback"
                                            description=""
                                            id="fieldset-1"
                                            label="Admin First Name"
                                            label-for="admin-first-name"
                                    >
                                        <b-form-input
                                                :state="!$v.form.admin_first_name.$invalid"
                                                id="admin-first-name"
                                                name="admin-first-name"
                                                trim
                                                v-model="form.admin_first_name">
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col>
                                    <b-form-group
                                            :invalid-feedback="invalidFeedback"
                                            :valid-feedback="validFeedback"
                                            description=""
                                            id="fieldset-1"
                                            label="Admin Last Name"
                                            label-for="admin-last-name"
                                    >
                                        <b-form-input
                                                :state="!$v.form.admin_last_name.$invalid"
                                                id="admin-last-name"
                                                name="admin-last-name"
                                                trim
                                                v-model="form.admin_last_name">
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                            </b-form-row>

                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Admin Email"
                                    label-for="admin-email"
                            >
                                <b-form-input
                                        :state="!$v.form.admin_email.$invalid"
                                        id="admin-email"
                                        name="admin-email"
                                        trim
                                        type="email"
                                        v-model="form.admin_email">
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Admin Password"
                                    label-for="admin-password"
                            >
                                <b-input :state="!$v.form.admin_password.$invalid"
                                         aria-describedby="password-help-block"
                                         id="admin-password"
                                         name="admin-password"
                                         trim
                                         type="password"
                                         v-model="form.admin_password"></b-input>
                                <b-form-text id="password-help-block">
                                    Your password must be at least 8 characters long, and must contain letters and
                                    numbers, and must at least one special character.
                                </b-form-text>
                            </b-form-group>
                            <b-form-group
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                description=""
                                id="fieldset-1"
                                label="Parent ID"
                                label-for="client-id"
                            >
                                <b-form-input
                                    :state="!$v.form.parentID.$invalid"
                                    id="parent-id"
                                    name="parent-id"
                                    trim
                                    v-model="form.parentID"
                                >
                            </b-form-input>
                            </b-form-group>
                            <b-form-group
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                description=""
                                id="fieldset-1"
                                label="Parent Secret"
                                label-for="parent-secret"
                            >
                                <b-form-input
                                    :state="!$v.form.parentSecret.$invalid"
                                    id="parent-secret"
                                    name="parent-secret"
                                    trim
                                    v-model="form.parentSecret"
                                >
                            </b-form-input>
                            </b-form-group>
                        </b-tab>

                        <b-tab :title-link-class="linkClass(2)" class="w-75" title="Gateway details">
                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    id="fieldset-1"
                                    description="The Client Name is displayed to end-users on the Identity Provider selection page."
                                    label="Client Name"
                                    label-for="client-name"
                            >
                                <b-form-input
                                        :state="!$v.form.client_name.$invalid"
                                        id="client-name"
                                        name="client-name"
                                        trim
                                        placeholder = "Name of your OAuth 2.0 client"
                                        v-model="form.client_name">
                                </b-form-input>
                            </b-form-group>
                            <div v-for="(redirect_uri, index) in form.redirect_uris">
                                <b-form-row class="align-items-center">
                                    <b-col>
                                        <b-form-group
                                                :invalid-feedback="invalidFeedback"
                                                :valid-feedback="validFeedback"
                                                id="fieldset-1"
                                                description="Enter your callback URL. The redirect_uri parameter must exactly match a URL in this list"
                                                label="Redirect URI"
                                                label-for="redirect-uri"
                                        >
                                            <b-input-group>
                                                <b-form-input
                                                        :state="!$v.form.redirect_uris.$each[index].$invalid"
                                                        id="redirect-uri"
                                                        name='redirect-uri'
                                                        trim
                                                        type="url"
                                                        v-model="form.redirect_uris[index]">
                                                </b-form-input>
                                                <b-input-group-append>
                                                    <b-button v-if="index > 0" @click="deleteRedirectUri(index)">Delete URI</b-button>
                                                    <b-button @click="addRedirectUri(index)">Add another URI</b-button>

                                                </b-input-group-append>
                                            </b-input-group>
                                        </b-form-group>
                                    </b-col>
                                </b-form-row>
                            </div>
                            <b-form-group label="Scope:">
                                <b-form-checkbox-group
                                        :options="scopeOptions"
                                        id="scope"
                                        name="scope"
                                        v-model="form.scope"
                                >
                                <b-link href="https://www.cilogon.org/oidc#h.p_PEQXL8QUjsQm">Information on scopes</b-link>
                                </b-form-checkbox-group>
                            </b-form-group>
                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Domain"
                                    label-for="domain"
                            >
                                <b-form-input
                                        :state="!$v.form.domain.$invalid"
                                        id="domain"
                                        placeholder="idp.htrc.indiana.edu"
                                        trim
                                        v-model="form.domain">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Client URI"
                                    label-for="client-uri"
                            >
                                <b-form-input
                                        :state="!$v.form.client_uri.$invalid"
                                        id="client-uri"
                                        trim
                                        v-model="form.client_uri">
                                </b-form-input>
                            </b-form-group>
                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Logo URI"
                                    label-for="logo-uri"
                            >
                                <b-form-input
                                        :state="!$v.form.logo_uri.$invalid"
                                        id="logo-uri"
                                        trim
                                        type="url"
                                        v-model="form.logo_uri">
                                </b-form-input>
                            </b-form-group>

                            <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    id="fieldset-1"
                                    label="Comment"
                                    label-for="comment"
                            >
                                <b-form-textarea
                                        :state="!$v.form.comment.$invalid"
                                        id="comment"
                                        rows="3" textarea trim
                                        placeholder="Provide description of the new tenant and any other comments here (at least 15 characters long) "
                                        v-model="form.comment">
                                </b-form-textarea>
                            </b-form-group>
                            <b-form-group label="Application Type">
                                <b-form-radio-group
                                        :options="application_typeOptions"
                                        id="application-type"
                                        name="application-type"
                                        v-model="form.application_type"
                                ></b-form-radio-group>
                            </b-form-group>
                            <b-button :disabled="isSubmitDisabled" type="submit" v-b-modal.modal-1 variant="primary">
                                Request Tenant
                            </b-button>
                        </b-tab>
                        <b-tab :title-link-class="linkClass(3)" class="w-75" title="Client Details">
                            <div v-if="this.clientID === ''">
                                <div class="row">
                                    <div class="col">
                                        <h1 class="h4 mb-4">Please create a new tenant to view ClientID and Client Secret</h1>
                                    </div>
                                </div>
                            </div>
                            <div v-else>
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
                                                        <th scope="row">Client ID</th>
                                                        <td>
                                                            <div> {{this.clientID}}</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">Client Secret</th>
                                                        <td>
                                                            <div> {{this.clientSecret}}</div>
                                                        </td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-form>
            <div class="text-center">
                <b-button-group class="mt-2">
                    <b-button v-if="tabIndex > 0" @click="tabIndex--">Previous</b-button>
                    <b-button v-if="tabIndex < 2" @click="tabIndex++">Next</b-button>
                </b-button-group>
                <div class="text-muted">Current Tab: {{ tabIndex+1 }} of 4</div>
            </div>
        </div>
    </div>
</template>

<script>
    import {email, required, url, minLength} from "vuelidate/lib/validators";
    import axios from "axios";

    export default {
        computed: {
            state() {
                return this.name.length >= 4 ? true : false
            },
            invalidFeedback() {
                return ''
            },
            validFeedback() {
                return ''
            },
            isSubmitDisabled() {
                return this.$v.form.$invalid;
            }
        },
        data() {
            return {
                tabIndex: 0,
                form: {
                    client_name: "",
                    requester_email: "",
                    admin_username: "",
                    admin_first_name: "",
                    admin_last_name: "",
                    admin_email: "",
                    admin_password: "",
                    primary_contact: "",
                    secondary_contact: "",
                    redirect_uris: [""],
                    scope: ["openid"],
                    domain: "",
                    client_uri: "",
                    logo_uri: "",
                    application_type: "",
                    comment: "",
                    parentID: "",
                    parentSecret: ""
                },
                scopeOptions: [
                    {text: "openId", value: "openid", disabled: "true"},
                    {text: "email", value: "email"},
                    {text: "profile", value: "profile"},
                    {text: "org.cilogon.userinfo", value: "org.cilogon.userinfo"},
                ],
                application_typeOptions: [
                    {text: "web", value: "web"},
                ],
                clientID: '',
                clientSecret: ''
            }
        },
        validations: {
            form: {
                client_name: {required},
                requester_email: {required, email},
                admin_username: {required},
                admin_first_name: {required},
                admin_last_name: {required},
                admin_email: {required},
                admin_password: {
                    required,
                    strongPassword(admin_password) {
                        return (
                            /[a-z]/.test(admin_password) && // checks for a-z
                            /[0-9]/.test(admin_password) && // checks for 0-9
                            /\W|_/.test(admin_password) && // checks for special char
                            admin_password.length >= 8
                        );
                    }
                },
                primary_contact: {required},
                secondary_contact: {},
                scope: {required},
                domain: {
                    required,
                    validDomain(domain) {
                        return (
                            /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,}\.?((xn--)?([a-z0-9\-.]{1,61}|[a-z0-9-]{1,30})\.?[a-z]{2,})$/.test(domain)
                        )
                    }
                },
                client_uri: {required},
                logo_uri: {url},
                application_type: {required},
                redirect_uris: {
                    $each: {
                        required, url
                    }
                },
                comment: {required, minLength: minLength(15)},
                parentID: {},
                parentSecret: {}
            }
        },
        methods: {
            linkClass(idx) {
                if (this.tabIndex === idx) {
                    return ['bg-primary', 'text-light']
                } else {
                    return ['bg-light', 'text-info']
                }
            },
            onSubmit(event) {
                event.preventDefault();

                if(!this.$v.form.$invalid)
                {
                    let requester_email = this.$v.form.requester_email.$model;
                    let contact = this.$v.form.primary_contact.$model;
                    let secondary_contact = this.$v.form.secondary_contact.$model;
                    let admin_username = this.$v.form.admin_username.$model;
                    let admin_first_name = this.$v.form.admin_first_name.$model;
                    let admin_last_name = this.$v.form.admin_last_name.$model;
                    let admin_email = this.$v.form.admin_email.$model;
                    let admin_password = this.$v.form.admin_password.$model;
                    let client_name = this.$v.form.client_name.$model;
                    let redirect_uris = this.$v.form.redirect_uris.$model;
                    let scope = this.$v.form.scope.$model;
                    let domain = this.$v.form.domain.$model;
                    let client_uri = this.$v.form.client_uri.$model;
                    let logo_uri = this.$v.form.logo_uri.$model;
                    let comment = this.$v.form.comment.$model;
                    let application_type = this.$v.form.application_type.$model;
                    
                    let scopeString = '';
                    for(var i=0; i<scope.length; i++)
                    {
                        scopeString += scope[i]
                    }

                    let contacts = [];
                    contacts.push(contact);
                    if(secondary_contact)
                        contacts.push(secondary_contact);

                    //Request a new child tenanat
                    if(this.$v.form.parentID.$model !== '' && this.$v.form.parentSecret.$model !== '')
                    {
                        let encodedString = btoa(this.$v.form.parentID.$model+":"+this.$v.form.parentSecret.$model)

                        axios.post('https://custos.scigap.org/apiserver/tenant-management/v1.0.0/oauth2/tenant', 
                        {
                            "client_name": client_name,
                            "requester_email": requester_email,
                            "admin_username": admin_username,
                            "admin_first_name": admin_first_name,
                            "admin_last_name": admin_last_name,
                            "admin_email": admin_email,
                            "contacts": contacts,
                            "redirect_uris": redirect_uris,
                            "scope": scopeString,
                            "domain": domain,
                            "admin_password": admin_password,
                            "client_uri": client_uri,
                            "logo_uri": logo_uri,
                            "application_type": application_type,
                            "comment": comment
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${encodedString}`
                            }
                        })
                        .then(response => {
                            const { client_id, client_secret } = response.data;
                            this.clientID = client_id;
                            this.clientSecret = client_secret;
                            this.tabIndex += 1;
                        });
                    }
                    //Request a new parent tenant
                    else{
                        axios.post('https://custos.scigap.org/apiserver/tenant-management/v1.0.0/oauth2/tenant', 
                        {
                            "client_name": client_name,
                            "requester_email": requester_email,
                            "admin_username": admin_username,
                            "admin_first_name": admin_first_name,
                            "admin_last_name": admin_last_name,
                            "admin_email": admin_email,
                            "contacts": contacts,
                            "redirect_uris": redirect_uris,
                            "scope": scopeString,
                            "domain": domain,
                            "admin_password": admin_password,
                            "client_uri": client_uri,
                            "logo_uri": logo_uri,
                            "application_type": application_type,
                            "comment": comment
                        }, {
                            headers: {
                                'Content-Type': 'application/json',
                            }
                        })
                        .then(response => {
                            const { client_id, client_secret } = response.data;
                            this.clientID = client_id;
                            this.clientSecret = client_secret;
                            this.tabIndex += 1;
                        });
                    }
                    
                }
            },
            addRedirectUri: function () {
                this.form.redirect_uris.push("");
            },
            deleteRedirectUri: function (index) {
                if ( index > 0 ) {
                    this.form.redirect_uris.splice(index, 1);
                }
            }
        }
    }
</script>