<template>
    <div>
        <h1 class="heading">Admin Account Details</h1>
        <div class="container">
            <div>
                <CustomInputText labelName="Username" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Email" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Password" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="First Name" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Last Name" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Primary Contact Email" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Secondary Contact Email" inputType="text" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomInputText from '../components/CustomInputText.vue'

export default {
    name: "TenantStepTwo",
    components: {
        CustomInputText
    }
}
</script>

<style scoped>
.container {
    
}
.heading {
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 50px;
}
</style>