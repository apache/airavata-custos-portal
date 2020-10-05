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
      this.tenantRequestId = this.$el.dataset.tenantRequestId;
      this.tenantClientId = this.$el.dataset.tenantClientId;
      let token = this.$el.dataset.token;
      let decodedEmail = VueJwtDecode.decode(token).email;
      let encodedString = btoa(CLIENT_ID+":"+CLIENT_SECRET);

      axios.get(`https://custos.scigap.org/apiserver/tenant-management/v1.0.0/oauth2/tenant?client_id=${this.tenantClientId}`, {
              headers: {
                  'Authorization': `Bearer ${encodedString}`
              }
      })
      .then(res => {
        this.tenant = res.data;
        var d = new Date(0);
        d.setUTCSeconds(this.tenant.client_id_issued_at);
        this.tenant.client_id_issued_at = d;
        const tenantRequest = res.data;
      })

    }
  }).$mount("#view-request");
});
