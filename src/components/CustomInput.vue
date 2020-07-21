<template>
    <!-- <div class="form-group">
        <label class="label">{{labelName}}</label>
        <input class="form-control input "/>
    </div> -->
    <!-- <div>
        <div class="form-group">
            <label class="inputLabels">{{labelName}}</label> <br />
            <input v-bind:type="inputType" class="form-control inputText" />
        </div> 
    </div> -->
    <div>
        <!-- <b-form-group
                class="mb-0 inputLabels"
                label="username"
                label-for="input-formatter"
                >
                <b-form-input
                    class="inputText"
                    id="input-formatter"
                    v-model="text1"
                    :formatter="formatter"
                ></b-form-input>
            </b-form-group> -->
        <label for="input-live" class="inputLabels">{{labelName}}</label>
        <b-form-input
        class="inputText"
        v-model="name"
        :state="!$v.name.$invalid"
        trim
        ></b-form-input>
    </div>
</template>

<script>
import {required, minLength, email} from "vuelidate/lib/validators";

export default {
    name: "CustomInput",
    props: {
        labelName: String,
        inputType: String
    },
    data() {
        return {
            name: ''
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(5),
            email
        }
    }
}
</script>

<style scoped>
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