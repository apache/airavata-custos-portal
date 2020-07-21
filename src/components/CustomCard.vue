<template>
    <div>
        <div class="card">
            <div class="container">{{cardName}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CustomCard",
    props: {
        cardName: String
    }
}
</script>

<style scoped>
.card {
    width: 300px;
    height: 300px;
    border: 2px solid black;
    margin: 34px;
}
.container {
    width: 298px;
    height: 50px;
    background-color: black;
    color: white;
    margin-top: 250px;
    font-weight: bold;
    font-size: 18px;
    padding-top: 10px;
}
</style>