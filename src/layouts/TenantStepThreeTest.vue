<template>
    <div>
        <h1 class="heading">Tenant Details</h1>
        <b-form>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Domain</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.domain"
                        type="text"
                        class="inputText"
                        :state="!$v.form.domain.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Logo URL</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.logourl"
                        type="text"
                        class="inputText"
                        :state="!$v.form.domain.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Client URL</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.clienturl"
                        type="text"
                        class="inputText"
                        :state="!$v.form.clienturl.$invalid"
                    />
                </div>
            </div>
            <div class="container" v-for="(url, index) in form.redirecturl" v-bind:key=index>
                <div class="column1" align="right">
                    <label class="label">Redirect URL</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.redirecturl[index]"
                        type="text"
                        class="inputText"
                        :state="!$v.form.redirecturl.$invalid"
                    />
                    <b-button @click="onAdd(index)" class="btn">Add URI</b-button>
                    <b-button @click="onDelete(index)" class="btn">Delete URI</b-button>
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Scope</label>
                </div>
                <div class="column2" align="left">
                    <b-form-checkbox-group v-model="form.scope" :state="!$v.form.scope.$invalid">
                        <div class="container">
                            <div class="column3" >
                                <b-form-checkbox value="OpenID" class="checkLabel">OpenID</b-form-checkbox>
                            </div>
                            <div class="column4" align="left">
                                <b-form-checkbox value="Email" class="checkLabel">Email</b-form-checkbox>
                            </div>
                        </div>
                        <div class="container">
                            <div class="column3">
                                <b-form-checkbox value="Profile" class="checkLabel">Profile</b-form-checkbox>
                            </div>
                            <div class="column4" align="left">
                                <b-form-checkbox value="orgcilogon" class="checkLabel">orgcilogon.userinfo</b-form-checkbox>
                            </div>
                        </div>
                    </b-form-checkbox-group>
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Comment</label>
                </div>
                <div class="column2" align="left">
                    <!-- <b-form-group description="We need 15 characters"> -->
                        <b-form-textarea 
                            v-model="form.comment"
                            class="inputText"
                            rows="3"
                            :state="!$v.form.comment.$invalid"
                        />
                    <!-- </b-form-group> -->
                </div>
            </div>
        </b-form>
    </div>
</template>

<script>
import {url, required} from 'vuelidate/lib/validators';

export default {
    name: "TenantStepThreeTest",
    data() {
        return {
            form: {
                domain: '',
                logourl: '',
                clienturl: '',
                redirecturl: ['test'],
                scope: [],
                comment: ''
            }
        }
    },
    validations: {
        form: {
            domain: {required, url},
            logourl: {required, url},
            clienturl: {required, url},
            redirecturl: {required, url},
            scope: {
                scopeSelected(scope)
                {
                    return scope.length >= 1 ? true : false;
                }
            },
            comment: {required}
        }
    },
    methods: {
        onAdd(index) {
            this.form.redirecturl.push(" ");
            console.log("clicked", index);
        },
        onDelete(index) {
            if(this.form.redirecturl.length > 1)
                this.form.redirecturl = this.form.redirecturl.filter((elem, i) => i !== index);
            console.log("Delete", index);
        }
    }
}
</script>

<style scoped>
.inputText {
    border: 1px solid black;
    border-radius: 9px;
    width: 300px;
    padding: 10px;
    margin-left: 30px;
}
.container {
    display: flex;
    margin-bottom: 25px;
}
.column1 {
    flex: 2
}
.column2 {
    flex: 5
}
.label {
    margin-top: 8px;
    color: black;
    font-weight: bold;
}
.checkLabel {
    margin-left: 15px;
    font-weight: bold;
    color: black;
}
.column3 {
    flex: 1;
}
.column4 {
    flex: 5;
}
.heading {
    color: black;
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: bold;
}
.btn {
    color: white;
    background-color: #ff6600;
    padding: 2px 10px;
    border: 1px solid #ff6600;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 30px;
}
</style>