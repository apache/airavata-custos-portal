<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Login /> -->
    <!-- <HomePage /> -->
    <!-- <NewTenant /> -->
    <!-- <TenantStepOne /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Login from './components/Login.vue';
// import HomePage from './layouts/HomePage.vue'
// import TenantStepOne from './layouts/TenantStepOne';
// import NewTenant from './layouts/NewTenant.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Login,
    // HomePage,
    // NewTenant,
    // TenantStepOne
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
