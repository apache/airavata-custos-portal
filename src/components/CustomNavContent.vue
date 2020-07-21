<template>
    <div class="container">
        <p>{{name}}</p>
    </div>
</template>

<script>
export default {
    name: "CustomNavContent",
    props: {
        name: String
    }
}
</script>

<style scoped>
.container {
    width: 50px;
    height: 40px;
    border-bottom: 1px solid black;
}
</style>