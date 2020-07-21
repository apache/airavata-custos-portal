<template>
    <div class="container">
        <p>Application Type</p>
        <div class="alignCards">
            <CustomCard cardName="WebApplications" />
            <CustomCard cardName="Native" />
            <CustomCard cardName="Machine Learning" />
        </div>
    </div>
</template>

<script>
import CustomCard from '../components/CustomCard.vue';

export default {
    name: "TenantStepOne",
    components: {
        CustomCard
    }
}
</script>

<style scoped>
.container {
    width: 80%;
    height: 450px;
}
.alignCards {
    display: flex;
}
p {
    font-size: 30px;
    font-weight: bold;
    color: black;
}
</style>