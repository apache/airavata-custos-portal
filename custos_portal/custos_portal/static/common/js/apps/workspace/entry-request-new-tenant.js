import { entry } from "../../index";
import RequestNewTenantContainer from "./RequestNewTenantContainer";
import MainLayout from "../../components/MainLayout";
import VueJwtDecode from 'vue-jwt-decode'

// Expect a template with id "edit-experiment" and experiment-id data attribute
//
//   <div id="edit-experiment" data-experiment-id="..expid.."/>

entry(Vue => {
  new Vue({
    render(h) {
      return h(MainLayout, [
        h(RequestNewTenantContainer, {
          props : {
            requesterEmail : this.decodedEmail
          }
        })
      ]);
    },
    data() {
      return {
        experimentId: null,
        decodedEmail: null
      };
    },
    beforeMount() {
      let token = this.$el.dataset.token;
      
      this.decodedEmail = VueJwtDecode.decode(token).email;
    }
  }).$mount("#request-new-tenant");
});
