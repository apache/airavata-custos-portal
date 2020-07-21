<template>
    <div>
        <span class="container">
            <div class="icon"></div>
            <div class="elem">
                <div align="left" class="label-1">{{name}}</div>
                <div align="left" class="label-2">{{appType}}</div>
            </div>
            <div class="clientID" align="left">
                <p>CLIENTID <span>{{clientID}}</span></p>
            </div>
            <div align="right">
                <b-icon-info-circle class="icon1"></b-icon-info-circle>
                <b-icon-list-task class="icon2"></b-icon-list-task>
                <b-icon-link45deg class="icon3"></b-icon-link45deg>
                <b-icon-tag class="icon4"></b-icon-tag>
            </div>
        </span>
    </div>
</template>

<script>
export default {
    name: "CustomSearchBar",
    props: {
        name: String,
        appType: String,
        clientID: String
    }
}
</script>

<style scoped>
.elem {
    flex:1;
}
.container {
    display: flex;
    margin-left: 45px;
    margin-top: 30px;
    min-width: 1410px !important;
    height: 50px;
    border: 1px solid #eeeeee;
    border-radius: 10px;
    background-color: #eee;
}
.icon {
    flex: 0.14;
    height: 30px;
    width: 30px;
    border: 1px solid #cccccc;
    border-radius: 8px;
    background-color: #cccccc;
    margin-top: 8px;
    margin-right: 15px;
}
.label-2 {
    font-size: 10px;
    color: black;
}
.label-1 {
    margin-top: 3px;
    color: black;
    font-weight: bold;
}
.clientID {
    flex: 5;
    /* margin-left: 50px; */
    margin-top: 15px;
    font-size: 12px;
}
span {
    color: black;
    font-size: 14px;
    /* margin-left: 4px; */
}
.icon1 {
    font-size: 30px;
    /* margin-left: 500px; */
    margin-top: 8px;
    color:  grey;
}
.icon2 {
    font-size: 30px;
    margin-left: 10px;
    margin-top: 8px;
    color:  grey;
}
.icon3 {
    font-size: 30px;
    margin-left: 10px;
    margin-top: 8px;
    color:  grey;
}
.icon4 {
    font-size: 30px;
    margin-left: 10px;
    margin-top: 8px;
    color:  grey;
}

</style>