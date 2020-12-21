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
            tokenData: this.token
          }
        })
      ]);
    },
    data() {
      return {
        experimentId: null,
        token: null
      };
    },
    beforeMount() {
      console.log("Entry for list-new-tenant-request is executed");
      this.token = this.$el.dataset.token;
    }
  }).$mount("#list-requests");
});
