<template>
    <div>
        <div>
            <b-navbar class="navbar" toggleable="lg" type="dark">
                <div class="logo">
                    <b-icon-box class="icon"></b-icon-box>
                    <b-link class="label-name" href="#">Custos</b-link>
                </div>
                <div class="ml-auto">
                    <table>
                            <tr class="text-right">
                                <label class="label-user">John Doe</label>
                            </tr>
                            <tr class="text-right">
                                <label class="label-email">johndoe@iu.com</label>
                            </tr>
                        </table>
                    
                </div>
                <b-avatar class="avatar" text="JD" size="3.4em"></b-avatar>
            </b-navbar>
            </div>
    </div>
</template>

<script>
export default {
    name: "CustomAppBar"
}
</script>

<style scoped>
.label-name {
    color: rgb(37, 37, 37);
    font-size: 30px;
    margin: 10px;
}
.navbar {
    margin-top: -60px;
    background-color: white;
}
.icon {
    font-size:30px;
    color: grey;
}
.avatar {
    background-color: black;
    color: white;
    margin: 10px;
}
.userInfo {
    margin-left: 1180px;
}
.label-user {
    color: grey;
    font-weight: bold;
}
.label-email {
    color: black;
    font-weight: bold;
}
table {
    margin-top: 20px;
}
</style>