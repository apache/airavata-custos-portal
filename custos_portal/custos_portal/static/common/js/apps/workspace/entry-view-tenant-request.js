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
            tenantRequest: this.tenant,
            tokenData: this.token
          }
        })
      ]);
    },
    data() {
      return {
        tenant: null,
        token: null
      };
    },
    beforeMount() {
      console.log(this.$el);
      this.tenantRequestId = this.$el.dataset.tenantRequestId;
      this.tenantClientId = this.$el.dataset.tenantClientId;
      let token = this.$el.dataset.token;
      
      console.log(this.tenantClientId);

      let decodedEmail = VueJwtDecode.decode(token).email;
      let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);

      // axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/tenants?offset=0&status=ACTIVE&requester_email=${decodedEmail}`, {
      //           headers: {
      //               'Authorization': `Bearer ${encodedString}`
      //           }
      // })
      // .then(res => {
      //   const {tenant} = res.data;
      //   console.log(tenant);
        
      //   let tenantData = tenant.filter(t => {
      //     if(t.tenant_id !== "10000000")
      //       return t;
      //   })

      //   console.log(tenantData);

      //   const tenantRequest = tenantData.find(t => {
      //     console.log(t.tenant_id !== "10000000");
      //     if(t.tenant_id === this.tenantRequestId){
      //       console.log(t);
      //       return t;
      //     }
            
      //   })
      //   console.log(tenantRequest);
      //   this.tenant = tenantRequest[0] ? tenantRequest[0]:tenantRequest;
      //   console.log(this.tenant);
      // })

      axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/oauth2/tenant?client_id=${this.tenantClientId}`, {
              headers: {
                  'Authorization': `Bearer ${encodedString}`
              }
      })
      .then(res => {
        console.log(res.data);
        this.tenant = res.data;
        console.log("iss "+this.tenant.client_id_issued_at);

        var d = new Date(0);
        d.setUTCSeconds(this.tenant.client_id_issued_at);
        console.log(d);
        this.tenant.client_id_issued_at = d;
        console.log(this.tenant.client_id_issued_at);
        const tenantRequest = res.data;
      })

    }
  }).$mount("#view-request");
});
