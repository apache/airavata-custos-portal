<template>
    <b-container>
        <b-row align-v="start" align-h="center">
            <b-col style="min-width: 300px; max-width: 100%" class="text-center">
                <h2>Welcome to Custos</h2>
                <p class="h2-sub">Sign up and start authenticating</p>
                <div class="main-links">
                    <b-link href="http://airavata.apache.org/custos/" target="_blank">Custos Website</b-link>
                    <b-link class="ml-5"
                            href="https://cwiki.apache.org/confluence/display/CUSTOS/Gateways+2020%3ACustos+Tutorial" target="_blank">
                        Tutorial Instructions
                    </b-link>
                </div>
                <img class="w-100" src="./../../assets/custos_home.png">
            </b-col>
            <b-col style="max-width: 600px;min-width: 300px;" align-h="center">
                <b-card class="w-100 login-card">
                    <div class="p-2">
                        <h3 class="mb-2">(Recommended Option)</h3>
                        <b-button class="primary-btn w-100 text-center mt-2" variant="warning"
                                  v-on:click="this.loadAuthURL">
                            Register or Login with your Institution Identity
                        </b-button>
                    </div>
                </b-card>
                <b-card class="w-100 mt-3 login-card">
                    <form v-on:submit.prevent="this.login" class="p-2">
                        <h3 class="mb-3">Login with a Custos Account</h3>
                        <div class="p-2">
                            <label class="form-input-label" for="form-input-username">Username</label>
                            <b-form-input id="form-input-username" v-model="username"
                                          placeholder="Username"></b-form-input>
                        </div>
                        <div class="p-2">
                            <label class="form-input-label" for="form-input-password">Password</label>
                            <b-form-input id="form-input-password" type="password" v-model="password"
                                          placeholder="Password"></b-form-input>
                        </div>
                        <b-button class="primary-btn w-100 text-center mt-3" type="submit" variant="warning"
                                  v-on:click="this.login" :disabled="this.loginDisabled">
                            Login
                            <b-spinner small v-if="this.loginDisabled"></b-spinner>
                        </b-button>
                        <div v-if="this.loginError" class="text-danger w-100 mt-4 text-left form-error-message">
                            Invalid Username or Password
                        </div>
                        <p class="mt-3 w-100 additional-links text-center">
                            Don't have an account?
                            <router-link to="/register">Create an account</router-link>
                        </p>
                    </form>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import config from "@/config";
    import {mapGetters} from "vuex";
    import store from "@/store";

    export default {
        name: 'Landing',
        store: store,
        props: {
            msg: String,
            seen: Boolean,
            todos: Array
        },
        data: function () {
            return {
                username: "",
                password: "",
                loginDisabled: false,
                loginError: false
            }
        },
        computed: {
            ...mapGetters({
              authenticated: 'identity/isAuthenticated'
            })
        },
        methods: {
            async login() {
                this.loginDisabled = true
                if (this.username != null && this.username != '' && this.password != null && this.password != '') {
                    let params = {
                        client_id: config.value('clientId'),
                        client_sec:  config.value('clientSec'),
                        username: this.username,
                        password: this.password,
                        token_endpoint: "https://custos.scigap.org/apiserver/identity-management/v1.0.0/token"
                    };
                    await this.$store.dispatch('identity/authenticateLocally', params);
                } else {
                    this.loginError = true
                }
                this.loginDisabled = false
            },
            async callDismissed() {
                this.loginError = false
            },
            async loadAuthURL() {
                let params = {client_id: this.custosId, redirect_uri: config.value('redirectURI')};
                await this.$store.dispatch('identity/fetchAuthorizationEndpoint', params)
                window.location.href = this.$store.getters['identity/getAuthorizationEndpoint']
            }
        },
        watch: {
          authenticated() {
            if (this.authenticated === true) {
               this.$router.push('workspace')
            }
          }
        },
        mounted() {
          if (this.authenticated === true) {
            this.$router.push('workspace')
          }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h2 {
        font-family: Avenir;
        font-size: 35px;
        font-weight: 900;
        color: #203a43;
    }

    .h2-sub {
        font-family: Avenir-Roman;
        font-size: 22px;
        color: #203a43;
    }

    h3 {
        font-family: Avenir;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        color: #203a43;
    }

    .h3-sub {
        font-family: Avenir-Roman;
        font-size: 20px;
        text-align: left;
        color: #203a43;
    }

    .form-input-label {
        font-family: Avenir;
        font-weight: 900;
        text-align: left;
        float: left;
        color: #203a43;
    }

    .primary-btn {
        background-color: #ea6a0a;

        font-family: Avenir;
        font-size: 14px;
        font-weight: 900;
        text-align: left;
        color: #ffffff;
    }

    .primary-btn:hover {
        background-color: #da640b;
    }

    .form-error-message {
        font-family: Avenir;
        font-size: 14px;
        font-weight: 900;
        text-align: left;
    }

    .login-card {
        box-shadow: -1px 1px 6px 2px #ebebeb;
        border-radius: 10px;
        border: none;
    }

    .login-card .form-input-label {
        font-weight: 500;
        font-size: 15px;
    }

    .main-links a {
        font-family: Avenir;
        font-size: 20px;
        font-weight: 600;
        color: #ea6a0a;
    }

    .additional-links {
        font-size: 13px;
    }

    .additional-links a {
        color: #ea6a0a;
    }
</style>
