<template>
    <div>
        <CustomAppBar />
        <div class="outer-container">
            <div class="container1">
                <div class="tenant">
                    <b-icon-arrow-left-circle-fill class="icon"></b-icon-arrow-left-circle-fill>
                    <div class="tenant-info" align="right">
                        <p class="p-tenant">Tenant</p>
                        <p class="p-client">interactwel</p>
                    </div>
                </div>
                <div class="client-info" align="left">
                    <p>CLIENTID<span class="clientID">2334FHERTLEKJTI1213</span></p>
                </div>
            </div>
            <div class="container2">
                <div class="v-tabs" >
                    <div align="left" class="v-tab-active">Settings</div>
                    <div align="left" class="v-tab">User Management</div>
                    <div align="left" class="v-tab">Audits</div>
                </div>
                <div class="h-tabs" align="left">
                    <div class="h-tab">
                        <div align="center" v-on:click="onClickHandler(1)" v-bind:class="[value===1 ? 'tab-content-active' : 'tab-content' ]">Basic</div>
                        <div align="center" v-on:click="onClickHandler(2)" v-bind:class="[value===2 ? 'tab-content-active' : 'tab-content' ]">Properties</div>
                        <div align="center" v-on:click="onClickHandler(3)" v-bind:class="[value===3 ? 'tab-content-active' : 'tab-content' ]">URI</div>
                        <div align="center" v-on:click="onClickHandler(4)" v-bind:class="[value===4 ? 'tab-content-active' : 'tab-content' ]">Tokens</div>
                    </div>
                    <div v-if="value === 1" class="content">
                        <SettingsBasic />
                    </div>
                    <div v-if="value === 2" class="content">
                        <SettingsProperties />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CustomAppBar from '../components/CustomAppBar.vue';
import SettingsBasic from '../layouts/SettingsBasic.vue';
import SettingsProperties from '../layouts/SettingsProperties.vue';
// import CustomNavContent from '../components/CustomNavContent.vue';

export default {
    name: "Tenant",
    components: {
        CustomAppBar,
        SettingsBasic,
        SettingsProperties
        // CustomNavContent
    },
    data() {
        return {
            value: 1
        }
    },
    methods: {
        onClickHandler(step) 
        {
            this.value= step;
        }
    }
}
</script>

<style scoped>
.outer-container {
    min-width: 100% !important;
    border: 1.5px solid grey;
    border-left: 2px solid black;
    border-right: 2px solid black;
    min-height: 652px !important;
}
.container1 {
    display: flex;
    min-width: 90% !important;
    height: 50px;
    /* border: 1px solid black; */
    margin-left: 50px;
    margin-top: 20px;
}
.icon {
    font-size: 35px;
}
.p-tenant {
    color: grey;
    font-size: 14px;
}
.p-client {
    color: black;
    margin-top: -18px;
    font-size: 18px;
}
.tenant-info {
    margin-left: 20px;
}
.tenant {
    display: flex;
    flex: 1;
    margin-left: 80px;
}
.client-info {
    flex: 4;
    margin-top: 15px;
}
p {
    font-size: 10px;
    color: grey;
}
.clientID {
    font-size: 12px;
    padding: 10px;
    background-color: #eeeeee;
    color: black;
    border-radius: 10px;
    margin-left: 10px;
}
.h-tab {
    display: flex;
    max-height: 500px;
    max-width: 900px;
    margin-left: 200px;
}
.tab-content {
    flex: 1;
    /* border: 1px solid black; */
    border-bottom: 3px solid black;
    padding: 8px;
    color: black;
    font-weight: bold;
    cursor: pointer;
}
.tab-content-active {
    flex: 1;
    /* border: 1px solid #ff6600;; */
    border-bottom: 3px solid #ff6600;;
    padding: 8px;
    color: #ff6600;
    font-weight: bold;
    cursor: pointer;
}
.v-tab {
    height: 40px;
    width: 250px;
    /* border: 1px solid black; */
    padding: 10px;
    border-radius: 10px;
    background-color: #eeeeee;
    color: black;
    align-content: center;
    margin: 10px;
    padding-left: 25px;
}
.v-tab-active {
    height: 40px;
    width: 250px;
    /* border: 1px solid black; */
    padding: 10px;
    border-radius: 10px;
    background-color: #eeeeee;
    color: black;
    align-content: center;
    margin: 10px;
    font-weight: bold;
    padding-left: 25px;
}
.container2 {
    display: flex;
    margin-top: 50px;
}
.v-tabs {
    /* width: 30%; */
    flex: 1;
    margin-top: 40px;
    margin-left: 100px;
}
.h-tabs {
    /* width: 70%; */
    flex: 8;
    margin-left: -170px;   
}
.content {
    margin-top: 50px;
}
</style>