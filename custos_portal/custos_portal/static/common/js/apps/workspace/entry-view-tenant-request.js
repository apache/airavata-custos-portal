import { entry } from "../../index";
import ViewTenantRequestContainer from "./ViewTenantRequestContainer";
import MainLayout from "../../components/MainLayout";
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode'
import {CLIENT_ID, CLIENT_SECRET} from '../config/config';

// Expect a template with id "edit-experiment" and experiment-id data attribute
//
//   <div id="edit-experiment" data-experiment-id="..expid.."/>

entry(Vue => {
  new Vue({
    render(h) {
      return h(MainLayout, [
        h(ViewTenantRequestContainer, {
          props: {
            tenantRequest: this.tenant
          }
        })
      ]);
    },
    data() {
      return {
        tenant: null
      };
    },
    beforeMount() {
      this.tenantRequestId = JSON.parse(this.$el.dataset.tenantRequestId);

      let cookie = document.cookie.split(";")
      let token = '';
      for(var i=0; i<cookie.length; i++)
      {
        let result = cookie[i].split("=")
        if(result[0] === 'token'){
          token = result[1]
        }
      }

      let decodedEmail = VueJwtDecode.decode(token).email;

      let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);

      axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/tenants?offset=0&status=ACTIVE&requester_email=${decodedEmail}`, {
                headers: {
                    'Authorization': `Bearer ${encodedString}`
                }
      })
      .then(res => {
        const {tenant} = res.data;
        const tenantRequest = tenant.find(t => {
          if(t.tenant_id == this.tenantRequestId){
            return t;
          }
            
        })
        this.tenant = tenantRequest[0] ? tenantRequest[0]:tenantRequest;
      })
    }
  }).$mount("#view-request");
});
