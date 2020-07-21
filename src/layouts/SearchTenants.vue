<template>
    <div>
        <CustomAppBar />
        <!-- <hr/> -->
        <div class="container">
            <div class="search-bar">
                <b-navbar toggleable="lg" >
                    <p class="tenant-label">Tenants</p>
                    <input type="text" placeholder="Search" class="searchBox" />
                    <!-- Right aligned nav items -->
                    <b-navbar-nav class="ml-auto">
                        <CustomButton class="btn" labelName="Create New Tenant" color="coral" />    
                    </b-navbar-nav>
                </b-navbar>
            </div>
            <CustomSearchBar name="interactwel" appType="Web Application" clientID="233423FHERTLEKJTI1213" />
            <CustomSearchBar name="scigap" appType="Web Application" clientID="6575423TANJPLJQRT2390" />
        </div>
    </div>
</template>

<script>
import CustomAppBar from '../components/CustomAppBar.vue';
import CustomButton from '../components/CustomButton.vue';
import CustomSearchBar from '../components/CustomSearchBar.vue';

export default {
    name: "SearchTenants",
    components: {
        CustomAppBar,
        CustomButton,
        CustomSearchBar
    }
}
</script>

<style scoped>
.container {
    min-width: 100% !important;
    border: 1px solid black;
    border-left: 2px solid black;
    border-right: 2px solid black;
    min-height: 652px !important;
}
.tenant-label {
    font-size: 24px;
    font-weight: bold;
    color: black;
    margin-left: 30px;
}
.searchBox {
    width: 200px;
    border-radius: 5px;
    border: 1px solid grey;
    margin-left: 40px;
    margin-top: -10px;
    padding: 5px;
}
.btn {
    margin-right: 30px;
}
.search-bar {
    margin-top: 30px;
}
</style>