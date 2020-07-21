<template>
    <div class="container">
        <div class="column1" align="right">
            <label class="label">{{labelName}}</label>
        </div>
        <div class="column2" align="left">
           <div class="container">
                <div class="column3" >
                    <input v-bind:type="inputType" class="inputText" />
                    <label class="checkLabel">{{checkLabel1}}</label>
                </div>
                <div class="column4" align="left">
                    <input v-bind:type="inputType" class="inputText" />
                    <label class="checkLabel">{{checkLabel2}}</label>
                </div>
            </div>
            <div class="container">
                <div class="column3">
                    <input v-bind:type="inputType" class="inputText" />
                    <label class="checkLabel">{{checkLabel3}}</label>
                </div>
                <div class="column4" align="left">
                    <input v-bind:type="inputType" class="inputText" />
                    <label class="checkLabel">{{checkLabel4}}</label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomCheckBox",
    props: {
        inputType: String,
        labelName: String,
        checkLabel1: String,
        checkLabel2: String,
        checkLabel3: String,
        checkLabel4: String,
    }
}
</script>

<style scoped>
.container {
    display: flex;
}
.column1 {
    flex: 2;
}
.column2 {
    flex: 5;
}
.label {
    margin-top: 8px;
    color: black;
    font-weight: bold;
}
.checkLabel {
    margin-left: 10px;
    font-weight: bold;
    color: black;
}
.inputText {
    margin-left: 20px;
}
.column3 {
    flex: 1;
}
.column4 {
    flex: 5;
}
</style>