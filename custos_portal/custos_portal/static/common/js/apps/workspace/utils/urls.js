export default {

  viewTenantRequest(tenantRequest) {
    return (
      "/workspace/request/" +
      encodeURIComponent(tenantRequest.tenant_id) +
      "/"
    );
  },
  navigateToViewRequest(tenantRequest) {
    window.location.assign(
      this.viewTenantRequest(tenantRequest)
    );
  }
};
