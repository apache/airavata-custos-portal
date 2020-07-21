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
      this.tenantRequestId = JSON.parse(this.$el.dataset.tenantRequestId);

      let cookie = document.cookie.split(";")
      let token = '';
      for(var i=0; i<cookie.length; i++)
      {
        let result = cookie[i].split("=")
        if(result[0] === 'token')
          token = result[1]
      }

      let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);

      let decodedEmail = VueJwtDecode.decode(token).email;
      
      axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/tenants?offset=0&status=ACTIVE&requester_email=${decodedEmail}`, {
                headers: {
                    'Authorization': `Bearer ${encodedString}`
                }
      })
      .then(res => {
        const {tenant} = res.data;

        const tenantRequest = tenant.find(t => {
          if(t.tenant_id == this.tenantRequestId)
            return t;
        })
        this.tenantRequest = tenantRequest;
      })
    }
  }).$mount("#admin-edit-request");
});
