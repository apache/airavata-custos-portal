<template>
    <div>
        <b-form>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Client Name</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.client_name"
                        type="text"
                        class="inputText"
                        :state="state"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Requester Email</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.email"
                        type="email"
                        class="inputText"
                        :state="!$v.form.email.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Admin Username</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.username"
                        type="password"
                        class="inputText"
                        :state="!$v.form.username.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label"> Admin First Name</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.firstname"
                        type="text"
                        class="inputText"
                        :state="!$v.form.firstname.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label"> Admin Last Name</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.lastname"
                        type="text"
                        class="inputText"
                        :state="!$v.form.lastname.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Admin Password</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.password"
                        type="password"
                        class="inputText"
                        :state="!$v.form.password.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Primary Contact Email</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.primaryemail"
                        type="email"
                        class="inputText"
                        :state="!$v.form.primaryemail.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Secondary Contact Email</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.secondaryemail"
                        type="email"
                        class="inputText"
                        :state="!$v.form.secondaryemail.$invalid"
                    />
                </div>
            </div>
        </b-form>
    </div>
</template>

<script>
import {required, email} from 'vuelidate/lib/validators';

export default {
    name: "TenantStepTwoTest",
    data() {
        return {
            form: {
                client_name: '',
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                primaryemail: '',
                secondaryemail: '',
                username: ''
            }
        }
    },
    validations: {
        form: {
            client_name: {required},
            email: {required, email},
            password: {
                required,
                strongPassword(password) {
                    return (
                        /[a-zA-Z]/.test(password) &&
                        /[0-9]/.test(password) &&
                        /\W|_/.test(password) &&
                        password.length >= 8
                    );
                }
            },
            firstname: {required},
            lastname: {required},
            primaryemail: {required, email},
            secondaryemail: {required, email},
            username: {required}
        }
    },
    computed: {
        state() {
            return this.form.client_name.length >= 5 ? true : false;
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
    margin-bottom: 15px;
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
</style>