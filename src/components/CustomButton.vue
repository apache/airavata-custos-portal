<template>
    <button @click="$emit('click')" type="button" v-bind:class="[color==='coral' ? 'coral' : 'grey']">{{labelName}}</button>
</template>

<script>
export default {
    name: "CustomButton",
    props: {
        labelName: String,
        color: String
    }
}
</script>

<style scoped>
.coral {
    color: white;
    background-color: #ff6600;
    padding: 10px 25px;
    border: 1px solid #ff6600;
    border-radius: 8px;
    margin: 10px;
}

.grey {
    color: white;
    background-color: #b3b3b3;
    padding: 10px 25px;
    border-radius: 8px;
    border: 1px solid #b3b3b3;
    margin: 10px
}
</style>