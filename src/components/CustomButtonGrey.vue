<template>
    <button type="button" class="btn">{{labelName}}</button>
</template>

<script>
export default {
    name: "CustomButtonGrey",
    props: {
        labelName: String
    }
}
</script>

<style scoped>
.btn {
    color: white;
    background-color: #b3b3b3;
    margin: 10px;
    padding: 7px 20px;
}
</style>