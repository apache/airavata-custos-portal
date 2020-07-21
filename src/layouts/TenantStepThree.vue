<template>
    <div>
        <h1 class="heading">Tenant Details</h1>
        <div>
            <div>
                <CustomInputText labelName="Domain" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Logo URL" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Client URL" inputType="text" />
            </div>
            <br>
            <div>
                <CustomInputText labelName="Redirect URL" inputType="text" />
            </div>
            <br>
            <!-- <div class="container">
                <div class="column1" align="right">
                    <label class="label">Scope</label>
                </div>
                <div class="column2" align="left">
                    <input type="checkbox" />
                    <label>OpenID</label>
                </div>
            </div> -->
            <div>
                <CustomCheckBox labelName="Scope" inputType="checkbox"
                checkLabel1="OpenID" checkLabel2="Email" checkLabel3="Profile" checkLabel4="orgclilogon.userinfo" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomInputText from '../components/CustomInputText.vue';
import CustomCheckBox from '../components/CustomCheckBox.vue';

export default {
    name: "TenantStepThree",
    components: {
        CustomInputText,
        CustomCheckBox
    }
}
</script>

<style scoped>
.conatiner {
    display: flex;
}
.column1 {
    flex: 1;
}
.column2 {
    flex: 1;
}
.label {
    margin-top: 8px;
    color: black;
    font-weight: bold;
}
.heading {
    color: black;
    font-size: 20px;
    margin-bottom: 30px;
    font-weight: bold;
}
</style>