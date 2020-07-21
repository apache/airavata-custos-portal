<template>
    <div>
        <CustomAppBar />
        <div class="row">
            <div class="column">
                <div class="container-elem" align="left">
                    <p class="p-heading">Hi John,</p>
                    <p class="p-data">Thank you for registering with us.</p>
                    <p class="p-data">In order to proceed with the custos you are required to create at least a single tenant.</p>
                    <b-button class="coral" v-on:click="onSubmit">Create Tenant</b-button>
                    <CustomButton color="grey" labelName="Skip" />
                </div>
            </div>
            <div class="column">
                <img :src="require('D:/Airavata/custos-admin/custos-admin/src/assets/images/home.jpg')" />
            </div>
        </div>
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import CustomAppBar from '../components/CustomAppBar.vue';

export default {
    name: "HomePage",
    components: {
        CustomButton,
        // CustomButtonGrey,
        CustomAppBar
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.$router.push("/create_tenant");
        }
    }
}
</script>

<style scoped>
.row {
    display: flex;
}
.column {
    flex: 1;
}
.container-elem {
    width: 500px;
    height: 500px;
    margin-left: 120px;
    margin-top: 120px;
}
.p-heading {
    font-size: 50px;
    color: black;
    font-weight: bold;
}
.p-data {
    font-size: 24px;
    line-height: 1.4em;
}
.coral {
    color: white;
    background-color: #ff6600;
    padding: 10px 25px;
    border: 1px solid #ff6600;
    border-radius: 8px;
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