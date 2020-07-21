<template>
    <div>
        <b-alert variant="danger" v-model="showAlert">Please fill out all the details</b-alert>
        <div class="row">
            <div class="column1" align="left">
                <h1>Welcome to Custos</h1>
                <p>Sign up and start authenticating.</p>
                <img :src="require('D:/Airavata/custos-admin/custos-admin/src/assets/images/auth.jpg')" />
            </div>
            <div class="column2">
                <div class="container" align="left">
                    <p class="heading">Sign Up</p>
                    <p>Already have an account? <a class="link" href="#">Login</a></p>
                    <br />
                    <b-form>
                        <label class="inputLabels">Username</label>
                        <b-form-input 
                            v-model="form.username"
                            :state="state" 
                            class="inputText"
                            type="text"
                        />
                        <label class="inputLabels">Email</label>
                        <b-form-input 
                            v-model="form.email"
                            :state="!$v.form.email.$invalid" 
                            class="inputText"
                            type="email"
                        />
                        <label class="inputLabels">Password</label>
                        <b-form-input 
                            v-model="form.password"
                            :state="!$v.form.password.$invalid" 
                            class="inputText"
                            type="password"
                        />
                        <b-button v-on:click="submitForm" class="btn">Submit</b-button>
                    </b-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators';

export default {
    name: "Login",
    components: {
        // LoginPage
    },
    data() {
        return {
            form: {
                username: '',
                email: '',
                password: ''
            },
            showAlert: false
        }
    },
    computed: {
        state(){
            return this.form.username.length >=4 ? true : false;
        }
    },
    validations: {
        form: {
            username: {required},
            email: {required, email},
            password: {
                required,
                strongPassword(password){
                    return(
                        /[a-zA-Z]/.test(password) &&
                        /[0-9]/.test(password) &&
                        /\W/.test(password) &&
                        password.length >= 8
                    );
                }
            }
        }
    },
    methods: {
        submitForm(event) {
            event.preventDefault();
            if(!this.$v.form.$invalid){
                this.showAlert = true;
                this.$router.push('/home');
            }
            else {
                this.showAlert = true;
            }
        }
    }
}
</script>

<style scoped>
.row {
    display: flex
}
.column1 {
    flex: 1;
    width: 500px;
    height: 500px;
    margin: 100px;
}
.column2 {
    flex: 1
}
p {
    font-size: 18px;
}

h1 {
    font-size: 40px;
    font-weight: bold;
    color: black;
}
.container {
    width: 500px;
    height: 500px;
}
.heading {
    font-size: 50px;
    color: black;
    font-weight: bold;
}
.link {
    color: #EA6A0A;
    /* margin-left: -100px; */
}
.btn {
    color: white;
    background-color: #EA6A0A;
    padding: 10px 25px;
    border: 1px solid #EA6A0A;
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
</style>