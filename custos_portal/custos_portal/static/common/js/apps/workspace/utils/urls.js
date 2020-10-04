export default {

  viewTenantRequest(tenantRequest) {
    console.log(tenantRequest);
    return (
      "/workspace/request/" +
      encodeURIComponent(tenantRequest.client_id) +
      "/"
    );
  },
  navigateToViewRequest(tenantRequest) {
    console.log(tenantRequest);
    window.location.assign(
      this.viewTenantRequest(tenantRequest)
    );
  }
};
