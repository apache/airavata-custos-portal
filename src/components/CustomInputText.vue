<template>
    <div class="container">
        <div class="column1" align="right">
            <label class="label">{{labelName}}</label>
        </div>
        <div class="column2" align="left">
            <input v-bind:type="inputType" class="inputText" />
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomInputText",
    props: {
        labelName: String,
        inputType: String
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