<template>
    <div>
        <!-- <CustomInputText labelName="Name" /><br>
        <CustomInputText labelName="Domain" /><br>
        <CustomInputText labelName="ClientID" /><br>
        <CustomInputPassword labelName="Client Secret" /><br>
        <CustomTextArea labelName="Description" inputRows="3"/><br>
        <CustomButton class="btn" color="coral" labelName="Save Changes" /> -->
        <b-form>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Name</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.name"
                        type="text"
                        class="inputText"
                        :state="state"
                    />
                </div>
            </div>
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
                    <label class="label">ClientID</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.clientid"
                        type="text"
                        class="inputText"
                        :state="!$v.form.clientid.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Client Secret</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.clientsecret"
                        type="text"
                        class="inputText"
                        :state="!$v.form.clientsecret.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Description</label>
                </div>
                <div class="column2" align="left">
                    <b-form-textarea
                        v-model="form.description"
                        rows="3"
                        class="inputTextArea"
                        :state="!$v.form.description.$invalid"
                    />
                </div>
            </div>
            <b-button class="coral">Save Changes</b-button>
        </b-form>
    </div>
</template>

<script>
// import CustomInputText from '../components/CustomInputText.vue';
// import CustomButton from '../components/CustomButton.vue';
// import CustomTextArea from '../components/CustomTextArea.vue';
// import CustomInputPassword from '../components/CustomInputPassword.vue';
import {url, required} from 'vuelidate/lib/validators';

export default {
    name: "SettingsBasic",
    // components: {
    //     CustomInputText,
    //     CustomButton,
    //     CustomTextArea,
    //     CustomInputPassword
    // }
    data() {
        return {
            form: {
                name: '',
                domain: '',
                clientid: '',
                clientsecret: '',
                textarea: ''
            }
        }
    },
    computed: {
        state()
        {
            return this.form.name.length >= 5 ? true : false;
        }
    },
    validations: {
        form: {
            name: {required},
            domain: {required, url},
            clientid: {required},
            clientsecret: {required},
            description: {required}
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
.inputTextArea {
    border: 1px solid black;
    border-radius: 9px;
    width: 400px;
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
.coral {
    color: white;
    background-color: #ff6600;
    padding: 10px 25px;
    border: 1px solid #ff6600;
    border-radius: 8px;
    margin-left: 460px;
}
</style>