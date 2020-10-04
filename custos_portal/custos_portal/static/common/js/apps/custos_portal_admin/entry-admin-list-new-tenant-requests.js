import { entry } from "../../index";
import ListTenantRequestsContainer from "./ListTenantRequestsContainer";
import MainLayout from "../../components/MainLayout";

// Expect a template with id "edit-experiment" and experiment-id data attribute
//
//   <div id="edit-experiment" data-experiment-id="..expid.."/>

entry(Vue => {
  new Vue({
    render(h) {
      return h(MainLayout, [
        h(ListTenantRequestsContainer, {
          props: {
            tokenData: this.tokenData
          }
        })
      ]);
    },
    data() {
      return {
        experimentId: null,
        tokenData: null
      };
    },
    beforeMount() {
      console.log("Entry for list-admin-new-tenant-request is executed")
      this.tokenData = this.$el.dataset.token;
    }
  }).$mount("#admin-list-requests");
});
