<template>
   <div>
       <CustomAppBar />
       <h1 class="heading" align="left">Create New Tenant</h1>
       <div class="stepper">
           <div v-bind:class="[step<=1 ? 'stepActive' : 'step']">Step 1</div>
           <div v-bind:class="[step===2 ? 'stepActive' : 'step']">Step 2</div>
           <div v-bind:class="[step>=3 ? 'stepActive' : 'step']">Step 3</div>
       </div>
       <div v-if="step <=1" class="section" >
           <TenantStepOne />
        </div> 
        <div v-if="step===2" class="section" >
            <b-alert variant="danger" v-model="showAlert">Please fill out all the details</b-alert>
            <b-form>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Client Name</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.client_name"
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
                            v-model="form_1.email"
                            type="email"
                            class="inputText"
                            :state="!$v.form_1.email.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Admin Username</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.username"
                            type="password"
                            class="inputText"
                            :state="!$v.form_1.username.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label"> Admin First Name</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.firstname"
                            type="text"
                            class="inputText"
                            :state="!$v.form_1.firstname.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label"> Admin Last Name</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.lastname"
                            type="text"
                            class="inputText"
                            :state="!$v.form_1.lastname.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Admin Password</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.password"
                            type="password"
                            class="inputText"
                            :state="!$v.form_1.password.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Primary Contact Email</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.primaryemail"
                            type="email"
                            class="inputText"
                            :state="!$v.form_1.primaryemail.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Secondary Contact Email</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_1.secondaryemail"
                            type="email"
                            class="inputText"
                            :state="!$v.form_1.secondaryemail.$invalid"
                        />
                    </div>
                </div>
            </b-form>
        </div> 
        <div v-if="step>=3" class="section" >
            <b-alert variant="danger" v-model="showAlert">Please fill out all the details</b-alert>
            <b-form>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Domain</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_2.domain"
                            type="text"
                            class="inputText"
                            :state="!$v.form_2.domain.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Logo URL</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_2.logourl"
                            type="text"
                            class="inputText"
                            :state="!$v.form_2.logourl.$invalid"
                        />
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Client URL</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_2.clienturl"
                            type="text"
                            class="inputText"
                            :state="!$v.form_2.clienturl.$invalid"
                        />
                    </div>
                </div>
                <div class="container" v-for="(url, index) in form_2.redirecturl" v-bind:key=index>
                    <div class="column1" align="right">
                        <label class="label">Redirect URL</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-input 
                            v-model="form_2.redirecturl[index]"
                            type="text"
                            class="inputText"
                            :state="!$v.form_2.redirecturl.$invalid"
                        />
                        <button @click="onAdd(index)" class="button">Add URI</button>
                        <button @click="onDelete(index)" class="button">Delete URI</button>
                    </div>
                </div>
                <div class="container">
                    <div class="column1" align="right">
                        <label class="label">Scope</label>
                    </div>
                    <div class="column2" align="left">
                        <b-form-checkbox-group v-model="form_2.scope" :state="!$v.form_2.scope.$invalid">
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
                            <b-form-textarea 
                                v-model="form_2.comment"
                                class="inputText"
                                rows="3"
                                :state="!$v.form_2.comment.$invalid"
                            />
                    </div>
                </div>
            </b-form>
        </div> 
        <div class="btn">
            <CustomButton v-on:click="prevStep" color="coral" labelName="BACK" /> 
            <CustomButton v-on:click="nextStep" color="coral" labelName="NEXT" /> 
        </div>
    </div> 
</template>

<script>
import CustomAppBar from '../components/CustomAppBar.vue';
import TenantStepOne from './TenantStepOne.vue';
import CustomButton from '../components/CustomButton.vue';
// import TenantStepTwoTest from './TenantStepTwoTest.vue';
// import TenantStepThreeTest from './TenantStepThreeTest.vue';
import {url, required, email, minLength} from 'vuelidate/lib/validators';

export default {
    name: "NewTenant",
    components: {
        CustomAppBar,
        TenantStepOne,
        CustomButton,
        // TenantStepTwoTest,
        // TenantStepThreeTest
    },
    data() {
        return {
            form_1: {
                client_name: '',
                email: '',
                password: '',
                firstname: '',
                lastname: '',
                primaryemail: '',
                secondaryemail: '',
                username: ''
            },
            form_2: {
                domain: '',
                logourl: 'google.com',
                clienturl: '',
                redirecturl: ['test'],
                scope: [],
                comment: ''
            },
            step: 1,
            totalSteps: 3,
            showAlert: false
        }
    },
    methods: {
       nextStep() {
           if(this.step === 2 && this.$v.form_1.$invalid){
            //    console.log("Please fill out all the details");
               this.showAlert = true;
           }
           else if(this.step === 3 && this.$v.form_2.$invalid){
            //    console.log("Please fill out all the details");
               this.showAlert = true;
           }
           else if(this.step<3){
               this.step++;
               this.showAlert = false;
           }
       },
       prevStep() {
           if(this.step>1)
           this.step--;
       },
       onAdd(index) {
            this.form_2.redirecturl.push(" ");
            console.log("clicked", index);
        },
        onDelete(index) {
            if(this.form_2.redirecturl.length > 1)
                this.form_2.redirecturl = this.form_2.redirecturl.filter((elem, i) => i !== index);
            console.log("Delete", index);
        }
    },
    validations: {
        form_1: {
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
            username: {
                required,
                minLength: minLength(4)
                }
        },
        form_2: {
            domain: {url},
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
    computed: {
        state() {
            return this.form_1.client_name.length >= 5 ? true : false;
        }
    }
}
</script>

<style scoped>
.heading {
    color: black;
    font-size: 30px;
    margin-left: 50px;
    font-weight: bold;
    margin-top: 15px;
}
.section {
    margin-top: 50px;;
}
.stepper {
    width: 100%;
    height: 50px;
    border: 2px black solid;
    margin-top: 15px;;
    display: flex
}
.btn {
    margin-left: 1250px;
}
.step {
    flex: 1;
    background-color: white;
    color: black;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border: 1px solid black;
}
.stepActive{
    flex: 1;
    background-color: black;
    color: white;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    border: 1px solid black;
}
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
.button {
    color: white;
    background-color: #EA6A0A;
    padding: 2px 10px;
    border: 1px solid #EA6A0A;
    border-radius: 8px;
    margin-top: 10px;
    margin-left: 30px;
}
</style>