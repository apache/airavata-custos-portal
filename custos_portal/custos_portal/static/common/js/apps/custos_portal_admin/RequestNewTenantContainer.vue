<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4 heading">New Tenant Request Form</h1>
            </div>
        </div>
        <b-form @submit="onSubmit">
            <div class="h-tabs card" align="left">
                <div class="h-tab">
                    <div align="center" v-on:click="onClickHandler(1)" v-bind:class="[tabIndex===1 ? 'tab-content-active' : 'tab-content' ]">User Info</div>
                    <div align="center" v-on:click="onClickHandler(2)" v-bind:class="[tabIndex===2 ? 'tab-content-active' : 'tab-content' ]">Gateway Admin details</div>
                    <div align="center" v-on:click="onClickHandler(3)" v-bind:class="[tabIndex===3 ? 'tab-content-active' : 'tab-content' ]">Gateway details</div>
                    <div align="center" v-on:click="onClickHandler(4)" v-bind:class="[tabIndex===4 ? 'tab-content-active' : 'tab-content' ]">Client details</div>
                </div>
                <div v-if="tabIndex === 1" class="content">
                    <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Requester Email"
                                    label-for="requester-email"
                                    class="inputLabels"
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
                                            class="inputLabels"
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
                                            class="inputLabels"
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
                </div>
                <div v-if="tabIndex === 2" class="content">
                    <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    description=""
                                    id="fieldset-1"
                                    label="Admin Username"
                                    label-for="admin-username"
                                    class="inputLabels"
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
                                            class="inputLabels"
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
                                            class="inputLabels"
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
                                    class="inputLabels"
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
                                    class="inputLabels"
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
                                class="inputLabels"
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
                                class="inputLabels"
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
                </div>
                <div v-if="tabIndex === 3" class="content">
                    <b-form-group
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    id="fieldset-1"
                                    description="The Client Name is displayed to end-users on the Identity Provider selection page."
                                    label="Client Name"
                                    label-for="client-name"
                                    class="inputLabels"
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
                            <div v-for="(redirect_uri, index) in form.redirect_uris" :key=index>
                                <b-form-row class="align-items-center">
                                    <b-col>
                                        <b-form-group
                                                :invalid-feedback="invalidFeedback"
                                                :valid-feedback="validFeedback"
                                                id="fieldset-1"
                                                description="Enter your callback URL. The redirect_uri parameter must exactly match a URL in this list"
                                                label="Redirect URI"
                                                label-for="redirect-uri"
                                                class="inputLabels"
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
                            <b-form-group label="Scope:" class="inputLabels">
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
                                    class="inputLabels"
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
                                    class="inputLabels"
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
                                    class="inputLabels"
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
                                    class="inputLabels"
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
                            <b-button :disabled="isSubmitDisabled" type="submit" v-b-modal.modal-1 variant="primary" class="btnCustom">
                                Request Tenant
                            </b-button>
                </div>
                <div v-if="tabIndex === 4" class="content">
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
                </div>
                <div class="text-center">
                    <b-button-group class="mt-2">
                        <b-button v-if="tabIndex > 1 && tabIndex < 3" @click="tabIndex--" class="btnCustom">Previous</b-button>
                        <b-button v-if="tabIndex < 3" @click="tabIndex++" class="btnCustom">Next</b-button>
                    </b-button-group>
                </div>
            </div>
        </b-form>      
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
                tabIndex: 1,
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
            onClickHandler(step) 
            {
                this.tabIndex = step;
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

<style scoped>
.btn:hover {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
.btn:focus {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
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
.content {
    margin-top: 20px;
    width: 1000px;
    margin-left: 35px;
}
.heading {
    font-size: 30px;
    color: black;
    font-weight: bold;
}
.card {
    padding: 25px;
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
.inputLabels {
    color: black;
    font-weight: bold;
}
</style>