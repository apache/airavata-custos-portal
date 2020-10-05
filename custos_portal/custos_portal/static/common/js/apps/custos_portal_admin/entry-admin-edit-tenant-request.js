import { entry } from "../../index";
import MainLayout from "../../components/MainLayout";
import EditTenantRequest from "./EditTenantRequest";
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode'
import {CLIENT_ID, CLIENT_SECRET} from '../config/config';

// import store from '../../store';

// Expect a template with id "edit-experiment" and experiment-id data attribute
//
//   <div id="edit-experiment" data-experiment-id="..expid.."/>

entry(Vue => {
  new Vue({
    render(h) {
      return h(MainLayout, [
        h(EditTenantRequest, {
          props: {
            tenantRequest: this.tenantRequest
          }
        })
      ]);
    },
    data() {
      return {
        tenantRequest: null
      };
    },
    beforeMount() {
      this.tenantRequestId = this.$el.dataset.tenantClientId;

      let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);

      axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/oauth2/tenant?client_id=${this.tenantRequestId}`, {
              headers: {
                  'Authorization': `Bearer ${encodedString}`
              }
      })
      .then(res => {
        this.tenantRequest = res.data;
      })
    }
  }).$mount("#admin-edit-request");
});
