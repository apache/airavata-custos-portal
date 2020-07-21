export default {

  viewAdminTenantRequest(tenantRequest) {
    return (
      "/admin/request/" +
      encodeURIComponent(tenantRequest.tenant_id) +
      "/"
    );
  },
  navigateToAdminViewRequest(tenantRequest) {
    window.location.assign(
      this.viewAdminTenantRequest(tenantRequest)
    );
  },
  adminEditTenantRequest(tenantRequest) {
    return (
      "/admin/edit-tenant-request/" +
      encodeURIComponent(tenantRequest.tenant_id) +
      "/"
    );
  },
  navigateToAdminEditRequest(tenantRequest) {
    window.location.assign(
      this.adminEditTenantRequest(tenantRequest)
    );
  },

};
