<template>
    <div>
        <b-form>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">Login URI</label>
                </div>
                <div class="column2" align="left">
                    <b-form-input 
                        v-model="form.loginuri"
                        type="text"
                        class="inputText"
                        :state="!$v.form.loginuri.$invalid"
                    />
                </div>
            </div>
            <div class="container">
                <div class="column1" align="right">
                    <label class="label">App Type</label>
                </div>
                <div class="column2" align="left">
                    <b-form-select 
                        v-model="form.apptype" 
                        :options="options" 
                        class="inputText"
                        :state="!$v.form.apptype.$invalid">
                    </b-form-select>
                </div>
            </div>
            <b-button class="coral">Save Changes</b-button>
        </b-form>
    </div>
</template>

<script>
import {url, required} from 'vuelidate/lib/validators';

export default {
    name: "SettingsProperties",
    data() {
        return {
            form: {
                loginuri: '',
                apptype: ''
            },
            options: [
                {text: "Web Application", value: "web_app"},
                {text: "Native Application", value: "native_app"},
                {text: "Machine Learning", value: "machine_learning"}
            ]
        }
    },
    validations: {
        form: {
            loginuri: {required, url},
            apptype: {required}
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
    height: 50px;
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