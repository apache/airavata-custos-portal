import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Login from './layouts/Login.vue';
import HomePage from './layouts/HomePage.vue';
import NewTenant from './layouts/NewTenant.vue';
import SearchTenant from './layouts/SearchTenants.vue';
import Tenant from './layouts/Tenant.vue'
import vuelidate from "vuelidate";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(vuelidate);

Vue.config.productionTip = false

const routes = [
  {path: '/login', component: Login},
  {path: '/home', component: HomePage},
  {path: '/create_tenant', component: NewTenant},
  {path: '/search_tenant', component: SearchTenant},
  {path: '/get_tenant', component: Tenant}
];

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
