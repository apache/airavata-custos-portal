<template>
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
</template>

<script>
import {required, email} from "vuelidate/lib/validators";
export default {
    name: "LoginPage",
    data() {
        return {
            form: {
            username: '',
            email: '',
            password: ''
        }
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
        }
    }
}
</script>

<style scoped>

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
    color: #ff6600;
    /* margin-left: -100px; */
}
.btn {
    color: white;
    background-color: #ff6600;
    padding: 10px 25px;
    border: 1px solid #ff6600;
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