<template>
    <div>
        <div class="row">
            <div class="col">
                <h1 class="h4 mb-4 heading">Update Tenant Request Form</h1>
            </div>
        </div>
        <div class="card">
            <b-form @submit="onSubmit">
                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Client Name"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.client_name"
                            trim>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Requester Email"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.requester_email"
                            :state="!$v.form.requester_email.$invalid"
                            trim>
                    </b-form-input>
                </b-form-group>

                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Admin Username"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.admin_username"
                            :state="!$v.form.admin_username.$invalid"
                            trim>
                    </b-form-input>
                </b-form-group>
                <b-form-row>
                    <b-col>
                        <b-form-group
                                id="fieldset-1"
                                description=""
                                label="Admin First Name"
                                label-for="input-1"
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                class="inputLabels"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.admin_first_name"
                                    :state="!$v.form.admin_first_name.$invalid"
                                    trim>
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                                id="fieldset-1"
                                description=""
                                label="Admin Last Name"
                                label-for="input-1"
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                class="inputLabels"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.admin_last_name"
                                    :state="!$v.form.admin_last_name.$invalid"
                                    trim>
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>

                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Admin Email"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.admin_email"
                            :state="!$v.form.admin_email.$invalid"
                            trim>
                    </b-form-input>
                </b-form-group>

                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Admin Password"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-input type="password"
                             id="text-password"
                             aria-describedby="password-help-block"
                             v-model="form.admin_password"
                             :state="!$v.form.admin_password.$invalid"
                             trim></b-input>
                    <b-form-text id="password-help-block">
                        Your password must be 8-20 characters long, and must contain letters and numbers, and must
                        at least one special character.
                    </b-form-text>
                </b-form-group>
                <b-form-row>
                    <b-col>
                        <b-form-group
                                id="fieldset-1"
                                description=""
                                label="Primary Contact"
                                label-for="input-1"
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                class="inputLabels"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.primary_contact"
                                    :state="!$v.form.primary_contact.$invalid"
                                    trim>
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group
                                id="fieldset-1"
                                description=""
                                label="Secondary Contact"
                                label-for="input-1"
                                :invalid-feedback="invalidFeedback"
                                :valid-feedback="validFeedback"
                                class="inputLabels"
                        >
                            <b-form-input
                                    id="input-1"
                                    v-model="form.secondary_contact"
                                    :state="!$v.form.secondary_contact.$invalid"
                                    trim>
                            </b-form-input>
                        </b-form-group>
                    </b-col>
                </b-form-row>
                <div v-for="(redirect_uri, index) in this.tenantRequest.redirect_uris" :key="index">
                    <b-form-row class="align-items-center">
                        <b-col>
                            <b-form-group
                                    id="fieldset-1"
                                    description=""
                                    label="Redirect URI"
                                    label-for="input-1"
                                    :invalid-feedback="invalidFeedback"
                                    :valid-feedback="validFeedback"
                                    class="inputLabels"
                            >
                                <b-input-group>
                                    <b-form-input
                                            id="input-1"
                                            v-model="form.redirect_uris[index]"
                                            :state="!$v.form.redirect_uris.$each[index].$invalid"
                                            trim>
                                    </b-form-input>
                                    <b-input-group-append>
                                        <b-button @click="deleteRedirectUri(index)">Delete URI</b-button>
                                        <b-button @click="addRedirectUri(index)">Add another URI</b-button>

                                    </b-input-group-append>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                </div>
                <b-form-group label="Scope:" class="inputLabels">
                    <b-form-checkbox-group
                            id="checkbox-group-1"
                            v-model="form.scope"
                            :options="scopeOptions"
                            name="flavour-1"
                    ></b-form-checkbox-group>
                </b-form-group>
                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Domain"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.domain"
                            :state="!$v.form.domain.$invalid"
                            trim>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Client URI"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.client_uri"
                            :state="!$v.form.client_uri.$invalid"
                            trim>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="fieldset-1"
                        description=""
                        label="Logo URI"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-input
                            id="input-1"
                            v-model="form.logo_uri"
                            :state="!$v.form.logo_uri.$invalid"
                            trim>
                    </b-form-input>
                </b-form-group>
                <b-form-group
                        id="fieldset-1"
                        description="(At least 15 characters long) Provide description of the new tenant and any other comments here."
                        label="Comment"
                        label-for="input-1"
                        :invalid-feedback="invalidFeedback"
                        :valid-feedback="validFeedback"
                        class="inputLabels"
                >
                    <b-form-textarea
                            rows="3"
                            textarea
                            id="input-1"
                            v-model="form.comment"
                            :state="!$v.form.comment.$invalid"
                            trim>
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Application Type" class="inputLabels">
                    <b-form-radio-group
                            id="radio-group-1"
                            v-model="form.application_type"
                            :options="application_typeOptions"
                            name="radio-options"
                    ></b-form-radio-group>
                </b-form-group>
                <b-button :disabled="isUpdateDisable" type="submit" variant="primary" class="btnUpdate">Update</b-button>
            </b-form>
        </div>
    </div>
</template>

<script>
    import {email, required, url, minLength} from "vuelidate/lib/validators";
    import urls from "./utils/urls";
    import axios from 'axios';
    import {CLIENT_ID, CLIENT_SECRET} from '../config/config';

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
            isUpdateDisable() {
                return this.$v.form.$invalid
            }
        },
        props: {
            tenantRequest: {
                type: Object
            }
        },
        data() {
            return {
                form: {
                    admin_email: '',
                    admin_first_name: '',
                    admin_last_name: '',
                    admin_password: '',
                    admin_username: '',
                    application_type: '',
                    client_id: '',
                    client_name: '',
                    client_uri: '',
                    comment: '',
                    domain: '',
                    logo_uri: '',
                    redirect_uris: '',
                    requester_email: '',
                    scope: '',
                    tenant_id: '',
                    tenant_status: '',
                    primary_contact: '',
                    secondary_contact: ''
                },
                scopeOptions: [
                    {text: "openId", value: "openid"},
                    {text: "email", value: "email"},
                    {text: "profile", value: "profile"},
                    {text: "org.cilogon.userinfo", value: "org.cilogon.userinfo"},
                ],
                application_typeOptions: [
                    {text: "web", value: "web"}
                ]
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
                domain: {required,
                    validDomain(domain) {
                        return (
                            /^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,}\.?((xn--)?([a-z0-9\-.]{1,61}|[a-z0-9-]{1,30})\.?[a-z]{2,})$/.test(domain)
                        )
                    }},
                client_uri: {required},
                logo_uri: {url},
                application_type: {required},
                redirect_uris: {
                    $each: {
                        required, url
                    }
                },
                comment: {required, minLength: minLength(15)}
            }
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();

                let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);
                let redirectURI = [...this.$v.form.$model.redirect_uris]
                let contacts = [];
                let client_name = this.$v.form.$model.client_name;
                
                contacts.push(this.$v.form.$model.primary_contact)
                if(this.$v.form.$model.secondary_contact)
                    contacts.push(this.$v.form.$model.secondary_contact)
                
                axios.put(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/oauth2/tenant`,
                {
                    "admin_email": this.$v.form.$model.admin_email,
                    "admin_first_name": this.$v.form.$model.admin_first_name,
                    "admin_last_name": this.$v.form.$model.admin_last_name,
                    "admin_password": this.$v.form.$model.admin_password,
                    "admin_username": this.$v.form.$model.admin_username,
                    "application_type": this.$v.form.$model.application_type,
                    "client_id": this.$v.form.$model.client_id,
                    "client_name": this.$v.form.$model.client_name,
                    "client_uri": this.$v.form.$model.client_uri,
                    "comment": this.$v.form.$model.comment,
                    "contacts": [...contacts],
                    "domain": this.$v.form.$model.domain,
                    "logo_uri": this.$v.form.$model.logo_uri,
                    "redirect_uris": [...this.$v.form.$model.redirect_uris],
                    "requester_email": this.$v.form.$model.requester_email,
                    "scope": this.$v.form.$model.scope
                
                }, {
                    headers: {
                        'Authorization': `Bearer ${encodedString}`
                    }
                })
                .then(response => {
                    if(response.status === 200)
                    {
                        window.location.href = `http://127.0.0.1:8000/admin/request/${this.$v.form.$model.tenant_id}/`
                    }
                })
            },
            addRedirectUri: function () {
                this.form.redirect_uris.push("");
            },
            deleteRedirectUri: function (index) {
                this.form.redirect_uris.splice(index, 1);
            }
        },
        created() {
            setTimeout(() => {
                this.tenantRequest.primary_contact = this.tenantRequest.contacts[0];
                this.tenantRequest.secondary_contact = this.tenantRequest.contacts[1];
                this.form = Object.assign(this.form, {...this.tenantRequest});
            }, 1000);
        }
    }
</script>
<style scoped>
.btnUpdate {
    color: white;
    background-color: #ff6600;
    padding: 10px 25px;
    border: 1px solid #ff6600;
    border-radius: 8px;
}
.btnUpdate:hover {
        color: white;
          background-color: #944203;
          padding: 10px 25px;
          border: 1px solid #944203;
          border-radius: 8px;
}
.btnUpdate:focus {
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
.inputText {
    width: 300px;
    border: 1px solid black;
    margin-bottom: 15px;
}
.heading {
    font-size: 30px;
    color: black;
    font-weight: bold;
}
.card {
    padding: 25px;
}
</style>